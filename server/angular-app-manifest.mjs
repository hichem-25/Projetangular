
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
    'index.csr.html': {size: 4966, hash: 'aed6fc3ac63d44a86a54a8ca86c65c672d239f4e9655c986eb91f45b52f4a92e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1082, hash: 'c43ed7dda1302651e6a9e86b1dcbc16190e6011e95cff2e567d91021a1e1c8b4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 17725, hash: 'deef5e4455ac59da4f1b0c37afb36c9e3e588cb0d051f03e65156bd547c3661d', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'accueil/index.html': {size: 13077, hash: 'bcc76323aa37caaa4aa3bc154d45b76916c02b3810d2302b849e0cea8e869f79', text: () => import('./assets-chunks/accueil_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 21749, hash: '21edfe32b0985b4be3f7453d60e1e5161d48a1c5761f32be220f59850dfeb473', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 17283, hash: '955e2512472f5ecbeee561f5f691446131ef5876338f128db7961bb486fc6af5', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-L6MJ5VEY.css': {size: 250449, hash: 'Wm1+KEfQvbc', text: () => import('./assets-chunks/styles-L6MJ5VEY_css.mjs').then(m => m.default)}
  },
};
