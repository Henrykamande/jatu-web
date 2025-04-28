import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7cd294ea = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _0dd4f8bb = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _3a919b06 = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _5f2f1b17 = () => interopDefault(import('..\\pages\\checkout\\index.vue' /* webpackChunkName: "pages/checkout/index" */))
const _3d2cef12 = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _4c04447e = () => interopDefault(import('..\\pages\\engage-expert\\index.vue' /* webpackChunkName: "pages/engage-expert/index" */))
const _3376cc6e = () => interopDefault(import('..\\pages\\equipment\\index.vue' /* webpackChunkName: "pages/equipment/index" */))
const _713aa624 = () => interopDefault(import('..\\pages\\events\\index.vue' /* webpackChunkName: "pages/events/index" */))
const _7118ba7d = () => interopDefault(import('..\\pages\\expert-success\\index.vue' /* webpackChunkName: "pages/expert-success/index" */))
const _78c43936 = () => interopDefault(import('..\\pages\\farmlands\\index.vue' /* webpackChunkName: "pages/farmlands/index" */))
const _590321a0 = () => interopDefault(import('..\\pages\\financing\\index.vue' /* webpackChunkName: "pages/financing/index" */))
const _831a06e8 = () => interopDefault(import('..\\pages\\gakuo\\index.vue' /* webpackChunkName: "pages/gakuo/index" */))
const _2165412d = () => interopDefault(import('..\\pages\\gasaya\\index.vue' /* webpackChunkName: "pages/gasaya/index" */))
const _b017dee2 = () => interopDefault(import('..\\pages\\investor-success\\index.vue' /* webpackChunkName: "pages/investor-success/index" */))
const _16d30a74 = () => interopDefault(import('..\\pages\\join-event\\index.vue' /* webpackChunkName: "pages/join-event/index" */))
const _77d72224 = () => interopDefault(import('..\\pages\\joseph\\index.vue' /* webpackChunkName: "pages/joseph/index" */))
const _a40b8570 = () => interopDefault(import('..\\pages\\location\\index.vue' /* webpackChunkName: "pages/location/index" */))
const _d38ec18c = () => interopDefault(import('..\\pages\\management\\index.vue' /* webpackChunkName: "pages/management/index" */))
const _f90f339e = () => interopDefault(import('..\\pages\\marketing\\index.vue' /* webpackChunkName: "pages/marketing/index" */))
const _37c96974 = () => interopDefault(import('..\\pages\\meeting-success\\index.vue' /* webpackChunkName: "pages/meeting-success/index" */))
const _ab7c1be4 = () => interopDefault(import('..\\pages\\newsletter-success\\index.vue' /* webpackChunkName: "pages/newsletter-success/index" */))
const _773002ee = () => interopDefault(import('..\\pages\\order\\index.vue' /* webpackChunkName: "pages/order/index" */))
const _7c31f630 = () => interopDefault(import('..\\pages\\order-farm\\index.vue' /* webpackChunkName: "pages/order-farm/index" */))
const _92723104 = () => interopDefault(import('..\\pages\\our-services\\index.vue' /* webpackChunkName: "pages/our-services/index" */))
const _7683d1e4 = () => interopDefault(import('..\\pages\\owner-success\\index.vue' /* webpackChunkName: "pages/owner-success/index" */))
const _42a3ba62 = () => interopDefault(import('..\\pages\\privacy\\index.vue' /* webpackChunkName: "pages/privacy/index" */))
const _7cb57839 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _286a0763 = () => interopDefault(import('..\\pages\\projects\\index.vue' /* webpackChunkName: "pages/projects/index" */))
const _eed60e02 = () => interopDefault(import('..\\pages\\services\\index.vue' /* webpackChunkName: "pages/services/index" */))
const _79a29e32 = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _2918b042 = () => interopDefault(import('..\\pages\\simo-index.vue' /* webpackChunkName: "pages/simo-index" */))
const _6b2afb74 = () => interopDefault(import('..\\pages\\success\\index.vue' /* webpackChunkName: "pages/success/index" */))
const _a3df85e8 = () => interopDefault(import('..\\pages\\whishlist\\index.vue' /* webpackChunkName: "pages/whishlist/index" */))
const _2622676f = () => interopDefault(import('..\\pages\\winnie\\index.vue' /* webpackChunkName: "pages/winnie/index" */))
const _0640af29 = () => interopDefault(import('..\\pages\\blog\\blog-copy.vue' /* webpackChunkName: "pages/blog/blog-copy" */))
const _79c53a77 = () => interopDefault(import('..\\pages\\blog\\index-copy.vue' /* webpackChunkName: "pages/blog/index-copy" */))
const _5af3c9a3 = () => interopDefault(import('..\\pages\\contact-us\\ali-index.vue' /* webpackChunkName: "pages/contact-us/ali-index" */))
const _547ba85a = () => interopDefault(import('..\\pages\\equipment\\list-farmland-equipment\\index.vue' /* webpackChunkName: "pages/equipment/list-farmland-equipment/index" */))
const _22ea11b5 = () => interopDefault(import('..\\pages\\equipment\\rent-farmland-equipment\\index.vue' /* webpackChunkName: "pages/equipment/rent-farmland-equipment/index" */))
const _7ddef434 = () => interopDefault(import('..\\pages\\global-auth\\login\\index.vue' /* webpackChunkName: "pages/global-auth/login/index" */))
const _0f8e7042 = () => interopDefault(import('..\\pages\\global-auth\\register\\index.vue' /* webpackChunkName: "pages/global-auth/register/index" */))
const _2be7e95e = () => interopDefault(import('..\\pages\\services\\urlcopy.vue' /* webpackChunkName: "pages/services/urlcopy" */))
const _331120d5 = () => interopDefault(import('..\\pages\\equipment\\apply\\_url.vue' /* webpackChunkName: "pages/equipment/apply/_url" */))
const _d4e76ac6 = () => interopDefault(import('..\\pages\\equipment\\rent-farmland-equipment\\_url.vue' /* webpackChunkName: "pages/equipment/rent-farmland-equipment/_url" */))
const _6ddfc95d = () => interopDefault(import('..\\pages\\auth\\_url.vue' /* webpackChunkName: "pages/auth/_url" */))
const _31c56ad7 = () => interopDefault(import('..\\pages\\blog\\_url.vue' /* webpackChunkName: "pages/blog/_url" */))
const _26030442 = () => interopDefault(import('..\\pages\\brand\\_url.vue' /* webpackChunkName: "pages/brand/_url" */))
const _23ee65de = () => interopDefault(import('..\\pages\\engage-expert\\_url.vue' /* webpackChunkName: "pages/engage-expert/_url" */))
const _a980fa26 = () => interopDefault(import('..\\pages\\farmlands\\_url.vue' /* webpackChunkName: "pages/farmlands/_url" */))
const _95d40928 = () => interopDefault(import('..\\pages\\join-event\\_url.vue' /* webpackChunkName: "pages/join-event/_url" */))
const _505aa50a = () => interopDefault(import('..\\pages\\order-farm\\_url.vue' /* webpackChunkName: "pages/order-farm/_url" */))
const _762602ea = () => interopDefault(import('..\\pages\\product\\_url.vue' /* webpackChunkName: "pages/product/_url" */))
const _a30031a2 = () => interopDefault(import('..\\pages\\projects\\_url.vue' /* webpackChunkName: "pages/projects/_url" */))
const _3dbfc3d0 = () => interopDefault(import('..\\pages\\register\\_url.vue' /* webpackChunkName: "pages/register/_url" */))
const _12c1bf5d = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _cb74a98a = () => interopDefault(import('..\\pages\\_category\\_subcategory\\index.vue' /* webpackChunkName: "pages/_category/_subcategory/index" */))

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
    component: _7cd294ea,
    name: "about"
  }, {
    path: "/blog",
    component: _0dd4f8bb,
    name: "blog"
  }, {
    path: "/cart",
    component: _3a919b06,
    name: "cart"
  }, {
    path: "/checkout",
    component: _5f2f1b17,
    name: "checkout"
  }, {
    path: "/contact-us",
    component: _3d2cef12,
    name: "contact-us"
  }, {
    path: "/engage-expert",
    component: _4c04447e,
    name: "engage-expert"
  }, {
    path: "/equipment",
    component: _3376cc6e,
    name: "equipment"
  }, {
    path: "/events",
    component: _713aa624,
    name: "events"
  }, {
    path: "/expert-success",
    component: _7118ba7d,
    name: "expert-success"
  }, {
    path: "/farmlands",
    component: _78c43936,
    name: "farmlands"
  }, {
    path: "/financing",
    component: _590321a0,
    name: "financing"
  }, {
    path: "/gakuo",
    component: _831a06e8,
    name: "gakuo"
  }, {
    path: "/gasaya",
    component: _2165412d,
    name: "gasaya"
  }, {
    path: "/investor-success",
    component: _b017dee2,
    name: "investor-success"
  }, {
    path: "/join-event",
    component: _16d30a74,
    name: "join-event"
  }, {
    path: "/joseph",
    component: _77d72224,
    name: "joseph"
  }, {
    path: "/location",
    component: _a40b8570,
    name: "location"
  }, {
    path: "/management",
    component: _d38ec18c,
    name: "management"
  }, {
    path: "/marketing",
    component: _f90f339e,
    name: "marketing"
  }, {
    path: "/meeting-success",
    component: _37c96974,
    name: "meeting-success"
  }, {
    path: "/newsletter-success",
    component: _ab7c1be4,
    name: "newsletter-success"
  }, {
    path: "/order",
    component: _773002ee,
    name: "order"
  }, {
    path: "/order-farm",
    component: _7c31f630,
    name: "order-farm"
  }, {
    path: "/our-services",
    component: _92723104,
    name: "our-services"
  }, {
    path: "/owner-success",
    component: _7683d1e4,
    name: "owner-success"
  }, {
    path: "/privacy",
    component: _42a3ba62,
    name: "privacy"
  }, {
    path: "/products",
    component: _7cb57839,
    name: "products"
  }, {
    path: "/projects",
    component: _286a0763,
    name: "projects"
  }, {
    path: "/services",
    component: _eed60e02,
    name: "services"
  }, {
    path: "/shop",
    component: _79a29e32,
    name: "shop"
  }, {
    path: "/simo-index",
    component: _2918b042,
    name: "simo"
  }, {
    path: "/success",
    component: _6b2afb74,
    name: "success"
  }, {
    path: "/whishlist",
    component: _a3df85e8,
    name: "whishlist"
  }, {
    path: "/winnie",
    component: _2622676f,
    name: "winnie"
  }, {
    path: "/blog/blog-copy",
    component: _0640af29,
    name: "blog-blog-copy"
  }, {
    path: "/blog/index-copy",
    component: _79c53a77,
    name: "blog-index-copy"
  }, {
    path: "/contact-us/ali-index",
    component: _5af3c9a3,
    name: "contact-us-ali"
  }, {
    path: "/equipment/list-farmland-equipment",
    component: _547ba85a,
    name: "equipment-list-farmland-equipment"
  }, {
    path: "/equipment/rent-farmland-equipment",
    component: _22ea11b5,
    name: "equipment-rent-farmland-equipment"
  }, {
    path: "/global-auth/login",
    component: _7ddef434,
    name: "global-auth-login"
  }, {
    path: "/global-auth/register",
    component: _0f8e7042,
    name: "global-auth-register"
  }, {
    path: "/services/urlcopy",
    component: _2be7e95e,
    name: "services-urlcopy"
  }, {
    path: "/equipment/apply/:url?",
    component: _331120d5,
    name: "equipment-apply-url"
  }, {
    path: "/equipment/rent-farmland-equipment/:url?",
    component: _d4e76ac6,
    name: "equipment-rent-farmland-equipment-url"
  }, {
    path: "/auth/:url?",
    component: _6ddfc95d,
    name: "auth-url"
  }, {
    path: "/blog/:url",
    component: _31c56ad7,
    name: "blog-url"
  }, {
    path: "/brand/:url?",
    component: _26030442,
    name: "brand-url"
  }, {
    path: "/engage-expert/:url?",
    component: _23ee65de,
    name: "engage-expert-url"
  }, {
    path: "/farmlands/:url",
    component: _a980fa26,
    name: "farmlands-url"
  }, {
    path: "/join-event/:url?",
    component: _95d40928,
    name: "join-event-url"
  }, {
    path: "/order-farm/:url",
    component: _505aa50a,
    name: "order-farm-url"
  }, {
    path: "/product/:url?",
    component: _762602ea,
    name: "product-url"
  }, {
    path: "/projects/:url",
    component: _a30031a2,
    name: "projects-url"
  }, {
    path: "/register/:url?",
    component: _3dbfc3d0,
    name: "register-url"
  }, {
    path: "/",
    component: _12c1bf5d,
    name: "index"
  }, {
    path: "/:category/:subcategory",
    component: _cb74a98a,
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
