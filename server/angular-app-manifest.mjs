
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Projetangular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Projetangular/accueil"
  },
  {
    "renderMode": 2,
    "route": "/Projetangular/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Projetangular/resume"
  },
  {
    "renderMode": 2,
    "route": "/Projetangular/contact"
  },
  {
    "renderMode": 2,
    "route": "/Projetangular/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4966, hash: 'faf7714b46f380fadf856df01d7795de7c599a06bb5806f4e40efb6e5c11b931', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1082, hash: 'f0aafcb227a7109d5cd35d78ac7d821a7b2edd7398c19a5361cda004ac19c719', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 17725, hash: '427c100643f62e1e541429f1c8527659ee0b2bdfcb186eb47a1520290ec2d992', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 21470, hash: '1bc700a21966b90526f41ea21e6396e04a184c2406b0460a3ce0fce747cd4461', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'accueil/index.html': {size: 13077, hash: '28890def5f84609b4289fefd98490716cda92e0983bc7df02dcf41936c4abdf5', text: () => import('./assets-chunks/accueil_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 17248, hash: '203062689a0984a51c8a324990c61f3e7385f28b5e7d60730320a500777bb889', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-L6MJ5VEY.css': {size: 250449, hash: 'Wm1+KEfQvbc', text: () => import('./assets-chunks/styles-L6MJ5VEY_css.mjs').then(m => m.default)}
  },
};
