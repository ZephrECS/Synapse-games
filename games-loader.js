/* ════════════════════════════════════════════════════
   games-loader.js
   Scans ZephrECS/Synapse-games on GitHub,
   finds every folder, grabs the .html + image,
   and returns a GAMES array ready for Synapse.
════════════════════════════════════════════════════ */

const REPO_OWNER  = 'ZephrECS';
const REPO_NAME   = 'Synapse-games';
const BRANCH      = 'main';
const CACHE_KEY   = 'synapse_games_cache';
const CACHE_TTL   = 60 * 60 * 1000; // 1 hour in ms

const API_BASE    = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents`;
const RAW_BASE    = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${BRANCH}`;

const IMAGE_EXTS  = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif'];
const GAME_EXTS   = ['.html', '.htm', '.txt'];


/* ── Helpers ──────────────────────────────────────── */

function toTitleCase(str) {
  return str
    .replace(/[-_]/g, ' ')           // dashes/underscores → spaces
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
    if (Date.now() - timestamp > CACHE_TTL) return null;
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


/* ── Main scanner ─────────────────────────────────── */

async function scanRepo(onProgress) {
  // Return cached result if fresh
  const cached = loadCache();
  if (cached) {
    onProgress?.('Loaded from cache', 100);
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

  const games  = [];
  const total  = folders.length;

  for (let i = 0; i < folders.length; i++) {
    const folder = folders[i];
    onProgress?.(`Scanning ${folder.name}…`, Math.round(10 + (i / total) * 85));

    try {
      // Fetch folder contents
      const contents = await fetchJSON(`${API_BASE}/${encodeURIComponent(folder.name)}`);

      // Find first image and first game file
      const imageFile = contents.find(f => f.type === 'file' && isImage(f.name));
      const gameFile  = contents.find(f => f.type === 'file' && isGame(f.name));

      // Skip folders with no game file
      if (!gameFile) continue;

      // Check for optional meta.json
      const metaFile = contents.find(f => f.name === 'meta.json');
      let meta = {};
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
        cat:   meta.cat  || 'all',
        tag:   meta.tag  || null,
      });

    } catch (e) {
      console.warn(`Skipped folder "${folder.name}":`, e.message);
    }
  }

  onProgress?.('Done!', 100);
  saveCache(games);
  return games;
}
