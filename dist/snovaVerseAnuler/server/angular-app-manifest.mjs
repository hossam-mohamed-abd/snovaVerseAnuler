
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/home/vr-service"
  },
  {
    "renderMode": 2,
    "route": "/home/AR&AI-service"
  },
  {
    "renderMode": 2,
    "route": "/home/metaverse-service"
  },
  {
    "renderMode": 2,
    "route": "/home/TourismVirtualTour"
  },
  {
    "renderMode": 2,
    "route": "/home/contact-us"
  },
  {
    "renderMode": 2,
    "route": "/not-found"
  },
  {
    "renderMode": 2,
    "redirectTo": "/not-found",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5370, hash: '3585cc10d050a7019e46de6c243c40183c66c09ff2315df044c49d0c24535b33', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1013, hash: '538d623bd52d676918b1e43c2e29d16eedd0818a14790134a4dd08762fb3580a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'not-found/index.html': {size: 23195, hash: '85cc168db7117869c99f37fca45e9fdfd03c2e898f246e955554b6599846b125', text: () => import('./assets-chunks/not-found_index_html.mjs').then(m => m.default)},
    'home/vr-service/index.html': {size: 42612, hash: 'ca7f4edf14038479def38f16cce67c5abdcb54d71fece210d9ee0886d0b10cd2', text: () => import('./assets-chunks/home_vr-service_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 98945, hash: 'a5e715b9943d360b78d79bc76b3f9c37f40133804fcd5b9a640aab3471c4b823', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'home/AR&AI-service/index.html': {size: 39356, hash: '30798f4458023b1d6a38fac3c3604201c07d5493ea4515bb9d0744a4fa655cd0', text: () => import('./assets-chunks/home_AR&AI-service_index_html.mjs').then(m => m.default)},
    'home/contact-us/index.html': {size: 38421, hash: '3bef763e2b3a7085a31d0798592d4fdb8cbf01f36ec0a697c846c39fe85744f5', text: () => import('./assets-chunks/home_contact-us_index_html.mjs').then(m => m.default)},
    'home/TourismVirtualTour/index.html': {size: 10094, hash: '9426b2534455b14b94f017f64c88f94a30f80ec334d7f7e535d8c07fbeb27c03', text: () => import('./assets-chunks/home_TourismVirtualTour_index_html.mjs').then(m => m.default)},
    'home/metaverse-service/index.html': {size: 34034, hash: 'ac60d3b14ca24448ed1801b799c1e4a6946d1ce3ac2eb534f2d46b97aef37961', text: () => import('./assets-chunks/home_metaverse-service_index_html.mjs').then(m => m.default)},
    'styles-4XRCD44Z.css': {size: 306381, hash: 'cjHGleSkVYs', text: () => import('./assets-chunks/styles-4XRCD44Z_css.mjs').then(m => m.default)}
  },
};
