import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _461591ca = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _08accc6a = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _44e1f3a8 = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _84f10174 = () => interopDefault(import('..\\pages\\checkout\\index.vue' /* webpackChunkName: "pages/checkout/index" */))
const _66fd0381 = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _b110821c = () => interopDefault(import('..\\pages\\engage-expert\\index.vue' /* webpackChunkName: "pages/engage-expert/index" */))
const _52f8bb7a = () => interopDefault(import('..\\pages\\equipment\\index.vue' /* webpackChunkName: "pages/equipment/index" */))
const _156c4a13 = () => interopDefault(import('..\\pages\\events\\index.vue' /* webpackChunkName: "pages/events/index" */))
const _52daff6c = () => interopDefault(import('..\\pages\\expert-success\\index.vue' /* webpackChunkName: "pages/expert-success/index" */))
const _30520516 = () => interopDefault(import('..\\pages\\farmlands\\index.vue' /* webpackChunkName: "pages/farmlands/index" */))
const _7491795e = () => interopDefault(import('..\\pages\\financing\\index.vue' /* webpackChunkName: "pages/financing/index" */))
const _1e959ebd = () => interopDefault(import('..\\pages\\gakuo\\index.vue' /* webpackChunkName: "pages/gakuo/index" */))
const _74d235c8 = () => interopDefault(import('..\\pages\\gasaya\\index.vue' /* webpackChunkName: "pages/gasaya/index" */))
const _2238d5be = () => interopDefault(import('..\\pages\\investor-success\\index.vue' /* webpackChunkName: "pages/investor-success/index" */))
const _1e668f35 = () => interopDefault(import('..\\pages\\join-event\\index.vue' /* webpackChunkName: "pages/join-event/index" */))
const _684612dd = () => interopDefault(import('..\\pages\\joseph\\index.vue' /* webpackChunkName: "pages/joseph/index" */))
const _0c52a177 = () => interopDefault(import('..\\pages\\location\\index.vue' /* webpackChunkName: "pages/location/index" */))
const _7fee98ae = () => interopDefault(import('..\\pages\\management\\index.vue' /* webpackChunkName: "pages/management/index" */))
const _1fa6f03c = () => interopDefault(import('..\\pages\\marketing\\index.vue' /* webpackChunkName: "pages/marketing/index" */))
const _3aa1a437 = () => interopDefault(import('..\\pages\\meeting-success\\index.vue' /* webpackChunkName: "pages/meeting-success/index" */))
const _b32bb106 = () => interopDefault(import('..\\pages\\newsletter-success\\index.vue' /* webpackChunkName: "pages/newsletter-success/index" */))
const _248aa0ba = () => interopDefault(import('..\\pages\\order\\index.vue' /* webpackChunkName: "pages/order/index" */))
const _2891cd52 = () => interopDefault(import('..\\pages\\order-farm\\index.vue' /* webpackChunkName: "pages/order-farm/index" */))
const _a638c7a6 = () => interopDefault(import('..\\pages\\our-services\\index.vue' /* webpackChunkName: "pages/our-services/index" */))
const _db900f82 = () => interopDefault(import('..\\pages\\owner-success\\index.vue' /* webpackChunkName: "pages/owner-success/index" */))
const _7e9e0680 = () => interopDefault(import('..\\pages\\privacy\\index.vue' /* webpackChunkName: "pages/privacy/index" */))
const _49e44730 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _f27b28dc = () => interopDefault(import('..\\pages\\projects\\index.vue' /* webpackChunkName: "pages/projects/index" */))
const _322545a4 = () => interopDefault(import('..\\pages\\services\\index.vue' /* webpackChunkName: "pages/services/index" */))
const _83f2f6d4 = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _31302ab3 = () => interopDefault(import('..\\pages\\simo-index.vue' /* webpackChunkName: "pages/simo-index" */))
const _4d2dd565 = () => interopDefault(import('..\\pages\\success\\index.vue' /* webpackChunkName: "pages/success/index" */))
const _1ac45ebd = () => interopDefault(import('..\\pages\\whishlist\\index.vue' /* webpackChunkName: "pages/whishlist/index" */))
const _6b57e944 = () => interopDefault(import('..\\pages\\winnie\\index.vue' /* webpackChunkName: "pages/winnie/index" */))
const _64991358 = () => interopDefault(import('..\\pages\\blog\\blog-copy.vue' /* webpackChunkName: "pages/blog/blog-copy" */))
const _330d47b0 = () => interopDefault(import('..\\pages\\blog\\index-copy.vue' /* webpackChunkName: "pages/blog/index-copy" */))
const _3cb60e92 = () => interopDefault(import('..\\pages\\contact-us\\ali-index.vue' /* webpackChunkName: "pages/contact-us/ali-index" */))
const _25411fc9 = () => interopDefault(import('..\\pages\\equipment\\list-farmland-equipment\\index.vue' /* webpackChunkName: "pages/equipment/list-farmland-equipment/index" */))
const _18a0edb8 = () => interopDefault(import('..\\pages\\equipment\\rent-farmland-equipment\\index.vue' /* webpackChunkName: "pages/equipment/rent-farmland-equipment/index" */))
const _858e8956 = () => interopDefault(import('..\\pages\\global-auth\\login\\index.vue' /* webpackChunkName: "pages/global-auth/login/index" */))
const _4a9edf1a = () => interopDefault(import('..\\pages\\global-auth\\register\\index.vue' /* webpackChunkName: "pages/global-auth/register/index" */))
const _67e7981c = () => interopDefault(import('..\\pages\\my-details\\account\\index.vue' /* webpackChunkName: "pages/my-details/account/index" */))
const _3d452346 = () => interopDefault(import('..\\pages\\my-details\\equipments\\index.vue' /* webpackChunkName: "pages/my-details/equipments/index" */))
const _3e4a250c = () => interopDefault(import('..\\pages\\my-details\\farms\\index.vue' /* webpackChunkName: "pages/my-details/farms/index" */))
const _13dc1fc0 = () => interopDefault(import('..\\pages\\services\\urlcopy.vue' /* webpackChunkName: "pages/services/urlcopy" */))
const _6b68d75b = () => interopDefault(import('..\\pages\\my-details\\equipments\\index1.vue' /* webpackChunkName: "pages/my-details/equipments/index1" */))
const _3231c24c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _ecd10c74 = () => interopDefault(import('..\\pages\\equipment\\apply\\_url.vue' /* webpackChunkName: "pages/equipment/apply/_url" */))
const _74daad64 = () => interopDefault(import('..\\pages\\equipment\\rent-farmland-equipment\\_url.vue' /* webpackChunkName: "pages/equipment/rent-farmland-equipment/_url" */))
const _2667db5a = () => interopDefault(import('..\\pages\\equipment\\rent-farmland-equipment\\_url1.vue' /* webpackChunkName: "pages/equipment/rent-farmland-equipment/_url1" */))
const _75f743ce = () => interopDefault(import('..\\pages\\auth\\_url.vue' /* webpackChunkName: "pages/auth/_url" */))
const _39dce548 = () => interopDefault(import('..\\pages\\blog\\_url.vue' /* webpackChunkName: "pages/blog/_url" */))
const _20dad7f1 = () => interopDefault(import('..\\pages\\brand\\_url.vue' /* webpackChunkName: "pages/brand/_url" */))
const _37b4fc80 = () => interopDefault(import('..\\pages\\engage-expert\\_url.vue' /* webpackChunkName: "pages/engage-expert/_url" */))
const _7a935462 = () => interopDefault(import('..\\pages\\equipment\\_id.vue' /* webpackChunkName: "pages/equipment/_id" */))
const _e5a1f3a2 = () => interopDefault(import('..\\pages\\equipments\\_id.vue' /* webpackChunkName: "pages/equipments/_id" */))
const _0997e71c = () => interopDefault(import('..\\pages\\farmlands\\_url.vue' /* webpackChunkName: "pages/farmlands/_url" */))
const _21ca1d1d = () => interopDefault(import('..\\pages\\join-event\\_url.vue' /* webpackChunkName: "pages/join-event/_url" */))
const _85e2728a = () => interopDefault(import('..\\pages\\order-farm\\_url.vue' /* webpackChunkName: "pages/order-farm/_url" */))
const _1a57a6d9 = () => interopDefault(import('..\\pages\\product\\_url.vue' /* webpackChunkName: "pages/product/_url" */))
const _defa7dc0 = () => interopDefault(import('..\\pages\\projects\\_url.vue' /* webpackChunkName: "pages/projects/_url" */))
const _79ba0fee = () => interopDefault(import('..\\pages\\register\\_url.vue' /* webpackChunkName: "pages/register/_url" */))
const _2560832c = () => interopDefault(import('..\\pages\\_category\\_subcategory\\index.vue' /* webpackChunkName: "pages/_category/_subcategory/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _461591ca,
    name: "about"
  }, {
    path: "/blog",
    component: _08accc6a,
    name: "blog"
  }, {
    path: "/cart",
    component: _44e1f3a8,
    name: "cart"
  }, {
    path: "/checkout",
    component: _84f10174,
    name: "checkout"
  }, {
    path: "/contact-us",
    component: _66fd0381,
    name: "contact-us"
  }, {
    path: "/engage-expert",
    component: _b110821c,
    name: "engage-expert"
  }, {
    path: "/equipment",
    component: _52f8bb7a,
    name: "equipment"
  }, {
    path: "/events",
    component: _156c4a13,
    name: "events"
  }, {
    path: "/expert-success",
    component: _52daff6c,
    name: "expert-success"
  }, {
    path: "/farmlands",
    component: _30520516,
    name: "farmlands"
  }, {
    path: "/financing",
    component: _7491795e,
    name: "financing"
  }, {
    path: "/gakuo",
    component: _1e959ebd,
    name: "gakuo"
  }, {
    path: "/gasaya",
    component: _74d235c8,
    name: "gasaya"
  }, {
    path: "/investor-success",
    component: _2238d5be,
    name: "investor-success"
  }, {
    path: "/join-event",
    component: _1e668f35,
    name: "join-event"
  }, {
    path: "/joseph",
    component: _684612dd,
    name: "joseph"
  }, {
    path: "/location",
    component: _0c52a177,
    name: "location"
  }, {
    path: "/management",
    component: _7fee98ae,
    name: "management"
  }, {
    path: "/marketing",
    component: _1fa6f03c,
    name: "marketing"
  }, {
    path: "/meeting-success",
    component: _3aa1a437,
    name: "meeting-success"
  }, {
    path: "/newsletter-success",
    component: _b32bb106,
    name: "newsletter-success"
  }, {
    path: "/order",
    component: _248aa0ba,
    name: "order"
  }, {
    path: "/order-farm",
    component: _2891cd52,
    name: "order-farm"
  }, {
    path: "/our-services",
    component: _a638c7a6,
    name: "our-services"
  }, {
    path: "/owner-success",
    component: _db900f82,
    name: "owner-success"
  }, {
    path: "/privacy",
    component: _7e9e0680,
    name: "privacy"
  }, {
    path: "/products",
    component: _49e44730,
    name: "products"
  }, {
    path: "/projects",
    component: _f27b28dc,
    name: "projects"
  }, {
    path: "/services",
    component: _322545a4,
    name: "services"
  }, {
    path: "/shop",
    component: _83f2f6d4,
    name: "shop"
  }, {
    path: "/simo-index",
    component: _31302ab3,
    name: "simo"
  }, {
    path: "/success",
    component: _4d2dd565,
    name: "success"
  }, {
    path: "/whishlist",
    component: _1ac45ebd,
    name: "whishlist"
  }, {
    path: "/winnie",
    component: _6b57e944,
    name: "winnie"
  }, {
    path: "/blog/blog-copy",
    component: _64991358,
    name: "blog-blog-copy"
  }, {
    path: "/blog/index-copy",
    component: _330d47b0,
    name: "blog-index-copy"
  }, {
    path: "/contact-us/ali-index",
    component: _3cb60e92,
    name: "contact-us-ali"
  }, {
    path: "/equipment/list-farmland-equipment",
    component: _25411fc9,
    name: "equipment-list-farmland-equipment"
  }, {
    path: "/equipment/rent-farmland-equipment",
    component: _18a0edb8,
    name: "equipment-rent-farmland-equipment"
  }, {
    path: "/global-auth/login",
    component: _858e8956,
    name: "global-auth-login"
  }, {
    path: "/global-auth/register",
    component: _4a9edf1a,
    name: "global-auth-register"
  }, {
    path: "/my-details/account",
    component: _67e7981c,
    name: "my-details-account"
  }, {
    path: "/my-details/equipments",
    component: _3d452346,
    name: "my-details-equipments"
  }, {
    path: "/my-details/farms",
    component: _3e4a250c,
    name: "my-details-farms"
  }, {
    path: "/services/urlcopy",
    component: _13dc1fc0,
    name: "services-urlcopy"
  }, {
    path: "/my-details/equipments/index1",
    component: _6b68d75b,
    name: "my-details-equipments-index1"
  }, {
    path: "/",
    component: _3231c24c,
    name: "index"
  }, {
    path: "/equipment/apply/:url?",
    component: _ecd10c74,
    name: "equipment-apply-url"
  }, {
    path: "/equipment/rent-farmland-equipment/:url?",
    component: _74daad64,
    name: "equipment-rent-farmland-equipment-url"
  }, {
    path: "/equipment/rent-farmland-equipment/:url1?",
    component: _2667db5a,
    name: "equipment-rent-farmland-equipment-url1"
  }, {
    path: "/auth/:url?",
    component: _75f743ce,
    name: "auth-url"
  }, {
    path: "/blog/:url",
    component: _39dce548,
    name: "blog-url"
  }, {
    path: "/brand/:url?",
    component: _20dad7f1,
    name: "brand-url"
  }, {
    path: "/engage-expert/:url?",
    component: _37b4fc80,
    name: "engage-expert-url"
  }, {
    path: "/equipment/:id",
    component: _7a935462,
    name: "equipment-id"
  }, {
    path: "/equipments/:id?",
    component: _e5a1f3a2,
    name: "equipments-id"
  }, {
    path: "/farmlands/:url",
    component: _0997e71c,
    name: "farmlands-url"
  }, {
    path: "/join-event/:url?",
    component: _21ca1d1d,
    name: "join-event-url"
  }, {
    path: "/order-farm/:url",
    component: _85e2728a,
    name: "order-farm-url"
  }, {
    path: "/product/:url?",
    component: _1a57a6d9,
    name: "product-url"
  }, {
    path: "/projects/:url",
    component: _defa7dc0,
    name: "projects-url"
  }, {
    path: "/register/:url?",
    component: _79ba0fee,
    name: "register-url"
  }, {
    path: "/:category/:subcategory",
    component: _2560832c,
    name: "category-subcategory"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
