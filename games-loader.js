/* ════════════════════════════════════════════════════
   games-loader.js
   Scans ZephrECS/Synapse-games on GitHub,
   finds every folder, grabs the .html + image,
   and returns a GAMES array ready for Synapse.

   Rate limit note:
   GitHub allows 60 unauthenticated API requests/hour.
   Each scan costs 1 (root) + N (folders) requests.
   Cache TTL is set to 1 minute so repeated page loads
   don't burn through the limit, but new games still
   appear quickly.
════════════════════════════════════════════════════ */

const REPO_OWNER  = 'ZephrECS';
const REPO_NAME   = 'Synapse-games';
const BRANCH      = 'main';
const CACHE_KEY   = 'synapse_games_cache';
const CACHE_TTL   = 60 * 1000; // 1 minute in ms

const API_BASE    = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents`;
const RAW_BASE    = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${BRANCH}`;

const IMAGE_EXTS  = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif'];
const GAME_EXTS   = ['.html', '.htm', '.txt'];


/* ── Helpers ──────────────────────────────────────── */

function toTitleCase(str) {
  return str
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

function isImage(filename) {
  return IMAGE_EXTS.some(ext => filename.toLowerCase().endsWith(ext));
}

function isGame(filename) {
  return GAME_EXTS.some(ext => filename.toLowerCase().endsWith(ext));
}

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`GitHub API error ${res.status}: ${url}`);
  return res.json();
}


/* ── Cache ────────────────────────────────────────── */

function loadCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { timestamp, games } = JSON.parse(raw);
    if (Date.now() - timestamp > CACHE_TTL) return null; // expired after 1 min
    return games;
  } catch (e) {
    return null;
  }
}

function saveCache(games) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      timestamp: Date.now(),
      games,
    }));
  } catch (e) {}
}

function clearCache() {
  localStorage.removeItem(CACHE_KEY);
}

/** Returns how many seconds until the cache expires, or 0 if already expired. */
function cacheSecondsRemaining() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return 0;
    const { timestamp } = JSON.parse(raw);
    const remaining = CACHE_TTL - (Date.now() - timestamp);
    return remaining > 0 ? Math.ceil(remaining / 1000) : 0;
  } catch (e) {
    return 0;
  }
}


/* ── Main scanner ─────────────────────────────────── */

async function scanRepo(onProgress) {
  // Serve from cache if still fresh (within 1 minute)
  const cached = loadCache();
  if (cached) {
    const secs = cacheSecondsRemaining();
    onProgress?.(`Loaded from cache — refreshes in ${secs}s`, 100);
    return cached;
  }

  onProgress?.('Scanning repository…', 5);

  // Get root contents
  const root = await fetchJSON(API_BASE);

  // Filter to folders only
  const folders = root.filter(item => item.type === 'dir');

  if (!folders.length) {
    throw new Error('No game folders found in repository root.');
  }

  // Fetch all folder contents in parallel for speed
  onProgress?.('Fetching game folders…', 15);

  const folderResults = await Promise.allSettled(
    folders.map(folder =>
      fetchJSON(`${API_BASE}/${encodeURIComponent(folder.name)}`)
        .then(contents => ({ folder, contents }))
    )
  );

  const games = [];
  const total = folderResults.length;

  for (let i = 0; i < folderResults.length; i++) {
    const result = folderResults[i];
    onProgress?.('Processing games…', Math.round(20 + (i / total) * 70));

    if (result.status === 'rejected') {
      console.warn('Skipped folder (fetch failed):', result.reason);
      continue;
    }

    const { folder, contents } = result.value;

    const imageFile = contents.find(f => f.type === 'file' && isImage(f.name));
    const gameFile  = contents.find(f => f.type === 'file' && isGame(f.name));

    if (!gameFile) continue;

    // Check for optional meta.json
    let meta = {};
    const metaFile = contents.find(f => f.name === 'meta.json');
    if (metaFile) {
      try {
        const metaRes = await fetch(`${RAW_BASE}/${encodeURIComponent(folder.name)}/meta.json`);
        if (metaRes.ok) meta = await metaRes.json();
      } catch (e) {}
    }

    games.push({
      title: meta.title || toTitleCase(folder.name),
      image: imageFile
        ? `${RAW_BASE}/${encodeURIComponent(folder.name)}/${encodeURIComponent(imageFile.name)}`
        : null,
      url:   `${RAW_BASE}/${encodeURIComponent(folder.name)}/${encodeURIComponent(gameFile.name)}`,
      cat:   meta.cat || 'all',
      tag:   meta.tag || null,
    });
  }

  onProgress?.('Done!', 100);
  saveCache(games);
  return games;
}
