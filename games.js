/*
 * ═══════════════════════════════════════════════════
 *  games.js  —  Synapse game list
 *  To add a game, copy one entry and fill in:
 *    title : display name
 *    url   : direct link to the playable file
 *    image : thumbnail URL (or null for no image)
 *    cat   : category shown in filter chips
 *            (use 'all' if you don't want a category)
 *    tag   : small label shown on the card (optional)
 * ═══════════════════════════════════════════════════
 */

const GAMES = [
  {
    title : 'A Bite At Freddies',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/A%20Bite%20At%20Freddies/ABAF.html',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/A%20Bite%20At%20Freddies/New%20Project%20(1).png',
    cat   : 'horror',
    tag   : 'FNAF',
  },
  {
    title : "Andy's Apple Farm",
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Andys%20Apple%20Farm/applefarm.html',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Andys%20Apple%20Farm/ne3tan.webp',
    cat   : 'horror',
    tag   : null,
  },
  {
    title : 'Balatro',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Balatro/Balatro.HTML',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Balatro/logo_Balatro.jpg',
    cat   : 'cards',
    tag   : null,
  },
  {
    title : 'Bendy',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Bendy/Bendy%20and%20the%20Ink%20Machine%20(1).html',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Bendy/images%20(1).jpeg',
    cat   : 'horror',
    tag   : null,
  },
  {
    title : 'Buckshot Roulette',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Buckshot%20Roulette/Buckshot%20Roulette.txt',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Buckshot%20Roulette/capsule_616x353%20(3).jpg',
    cat   : 'horror',
    tag   : null,
  },
  {
    title : 'COD Zombies',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/COD%20Zombies/NZP.txt',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/COD%20Zombies/New%20Project%20(4).png',
    cat   : 'action',
    tag   : 'COD',
  },
  {
    title : 'CloverPit',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/CloverPit/Clover%20Pit.html',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/CloverPit/CloverPit_cover.jpeg',
    cat   : 'action',
    tag   : null,
  },
  {
    title : 'Deadseat',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Deadseat/The%20Deadseat.html',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Deadseat/images_upscaled.jpg',
    cat   : 'horror',
    tag   : null,
  },
  {
    title : 'Fears To Fathom',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Fears%20To%20Fathom/Fears%20to%20Fathom.txt',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Fears%20To%20Fathom/MV5BNGZjOTBlYTctODcxNy00YTM1LTg2YTYtZTI3NzBmMDA4ZmJmXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg',
    cat   : 'horror',
    tag   : null,
  },
  {
    title : 'Five Nights At Winstons',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Five%20Nights%20At%20Winstons/five_nights_at_winstons.html',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Five%20Nights%20At%20Winstons/five-nights-at-winstons.jpg',
    cat   : 'horror',
    tag   : 'FNAF',
  },
  {
    title : 'Get Yoked',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Get%20Yoked/Get%20Yoked.html',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Get%20Yoked/New%20Project%20(3).jpg',
    cat   : 'action',
    tag   : null,
  },
  {
    title : 'Getting Over It',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Getting%20Over%20It/GOIWBF.txt',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Getting%20Over%20It/profile.jpg',
    cat   : 'platformer',
    tag   : null,
  },
  {
    title : 'Granny',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Granny/Granny.txt',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Granny/images.jpeg',
    cat   : 'horror',
    tag   : null,
  },
  {
    title : 'Half-Life',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/HalfLife/Half%20Life.txt',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/HalfLife/capsule_616x353.jpg',
    cat   : 'action',
    tag   : null,
  },
  {
    title : 'Hollow Knight',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Hollow%20Knight/HollowGME.txt',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Hollow%20Knight/MV5BMGIyYmJmZDgtOWQ1Ny00NDFiLTk2OTgtM2Q2ZWQ4OWIxZjg3XkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg',
    cat   : 'platformer',
    tag   : null,
  },
  {
    title : 'Hotline Miami',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Hotline%20Miami/Hotline%20Miami.html',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Hotline%20Miami/MV5BOWRlM2RkMjktYWQzMi00YmIxLTkyMWUtOTI0ZWRmODE1N2U5XkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg',
    cat   : 'action',
    tag   : null,
  },
  {
    title : 'Iron Lung',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Iron%20Lung/Iron%20Lung.html',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Iron%20Lung/MV5BM2JhZDRmNDAtZWE4OC00NmRjLTlmZGUtZmQxNmNkOTk5ZWRhXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg',
    cat   : 'horror',
    tag   : null,
  },
  {
    title : 'Midnight Shift',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Midnight%20Shift/midnight_shift.html',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Midnight%20Shift/RLDGy%2B.png',
    cat   : 'horror',
    tag   : null,
  },
  {
    title : 'PVZ2',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/PVZ2/clpvz2gardenless.txt',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/PVZ2/PVZ2.webp',
    cat   : 'strategy',
    tag   : null,
  },
  {
    title : 'People Playground',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/People%20Playground/People%20Playground.txt',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/People%20Playground/4bb51ff19e082e45d9187564ea12f3c01d520c683db7da74b10a89efd254ee7c.jpg',
    cat   : 'sandbox',
    tag   : null,
  },
  {
    title : 'Quake III',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Quake%20III/clquake3.txt',
    image : 'http://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Quake%20III/5290929.jpg',
    cat   : 'action',
    tag   : null,
  },
  {
    title : 'R.E.P.O',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/R.E.P.O/R.E.P.O.txt',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/R.E.P.O/repo-teases-big-update-game-rant.avif',
    cat   : 'horror',
    tag   : null,
  },
  {
    title : 'Sandboxels',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Sandboxels/clsandboxels.html',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Sandboxels/Site-logo.webp',
    cat   : 'sandbox',
    tag   : null,
  },
  {
    title : 'Shift At Midnight',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Shift%20At%20Midnight/clshiftatmidnight.html',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Shift%20At%20Midnight/coa2v6.jpg',
    cat   : 'horror',
    tag   : null,
  },
  {
    title : 'Side Effects',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Side%20Effects/MonkeyMayhen.txt',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Side%20Effects/side-effects-button-1759512691005.webp',
    cat   : 'horror',
    tag   : null,
  },
  {
    title : 'Slime Rancher',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Slime%20Rancher/Slime%20Rancher.txt',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Slime%20Rancher/w5OuzDEu6HNzT2K4e5HRI7vJ.avif',
    cat   : 'sandbox',
    tag   : null,
  },
  {
    title : 'Tattletail',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Tattletail/Tattletail.txt',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Tattletail/tattletail-646521.7.webp',
    cat   : 'horror',
    tag   : null,
  },
  {
    title : 'ULTRAKILL',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/ULTRAKILL/ULTRAKILL.txt',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/ULTRAKILL/MV5BNGIyZDE4OTYtNjBhOS00NzFkLTkyYWMtYzAzNWUxZThmMDBlXkEyXkFqcGc%40._V1_.jpg',
    cat   : 'action',
    tag   : null,
  },
  {
    title : 'Undertale',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Undertale/MV5BMWI3ZTkxZjktYWU3NC00OGQ1LWFlNzgtYzIwMWI4NDg2YTU0XkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Undertale/undertale.html',
    cat   : 'rpg',
    tag   : null,
  },
  {
    title : 'Vice City',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Vice-City/ViceCity.html',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Vice-City/Vice-city-cover.jpg',
    cat   : 'action',
    tag   : 'GTA',
  },
  {
    title : 'Webfishing',
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Webfishing/WebFishing%20(1).html',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Webfishing/images%20(3).jpeg',
    cat   : 'chill',
    tag   : null,
  },
  {
    title : "You're Not My Neighbor",
    url   : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Your%20Not%20My%20Neighbor/That's%20Not%20My%20Neighbor%20(1).html',
    image : 'https://raw.githubusercontent.com/ZephrECS/Synapse-games/refs/heads/main/Your%20Not%20My%20Neighbor/images%20(2).jpeg',
    cat   : 'horror',
    tag   : null,
  },
];
