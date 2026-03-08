
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
    'index.csr.html': {size: 5370, hash: '07c3bc196205797cd555873a936e85fc391cf15c9282ee5bcc30062f3c211209', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1013, hash: '30c74838fed1c2a76124c46dc5e35b383a449b31d15e3e27be73d144d0f72576', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/vr-service/index.html': {size: 42612, hash: '7e544047469035c14c74019a8e327a788dc14ee2226330ad145476b983790925', text: () => import('./assets-chunks/home_vr-service_index_html.mjs').then(m => m.default)},
    'not-found/index.html': {size: 23207, hash: '584693afbda0ea16a2a270ff129ea3ec95e4cab96c1310fa318e90132f98d27b', text: () => import('./assets-chunks/not-found_index_html.mjs').then(m => m.default)},
    'home/contact-us/index.html': {size: 38421, hash: 'f8fe770369411c85af10f7a3e66d122c56bb044a6ac5b277c1cc339146b84567', text: () => import('./assets-chunks/home_contact-us_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 98952, hash: 'a30f961c340c9ba67f72b07d95c9c6ef23e3c944931f2b4d9a6d5f72be4dad65', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'home/TourismVirtualTour/index.html': {size: 10094, hash: '244faedb6804c589617cbee508148a351c7d7ad65f76b9b3df9e2286feac7491', text: () => import('./assets-chunks/home_TourismVirtualTour_index_html.mjs').then(m => m.default)},
    'home/AR&AI-service/index.html': {size: 39356, hash: 'f7738ee848b0bc35bf7882058a716cbe3bb3d9a5c21618da7a7e966a9f471bc2', text: () => import('./assets-chunks/home_AR&AI-service_index_html.mjs').then(m => m.default)},
    'home/metaverse-service/index.html': {size: 34034, hash: 'fc071c2287c186cabd17b74c332c71d1976aa845a925eaec8c26b112f76276cd', text: () => import('./assets-chunks/home_metaverse-service_index_html.mjs').then(m => m.default)},
    'styles-4XRCD44Z.css': {size: 306381, hash: 'cjHGleSkVYs', text: () => import('./assets-chunks/styles-4XRCD44Z_css.mjs').then(m => m.default)}
  },
};
