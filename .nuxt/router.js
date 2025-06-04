import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c486f910 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _a867ff26 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _fea38ba2 = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _d3d20c6e = () => interopDefault(import('..\\pages\\checkout\\index.vue' /* webpackChunkName: "pages/checkout/index" */))
const _5997e944 = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _41e14362 = () => interopDefault(import('..\\pages\\engage-expert\\index.vue' /* webpackChunkName: "pages/engage-expert/index" */))
const _e74edd52 = () => interopDefault(import('..\\pages\\equipment\\index.vue' /* webpackChunkName: "pages/equipment/index" */))
const _6d8e8956 = () => interopDefault(import('..\\pages\\events\\index.vue' /* webpackChunkName: "pages/events/index" */))
const _0e374baf = () => interopDefault(import('..\\pages\\expert-success\\index.vue' /* webpackChunkName: "pages/expert-success/index" */))
const _69b1daf3 = () => interopDefault(import('..\\pages\\farmlands\\index.vue' /* webpackChunkName: "pages/farmlands/index" */))
const _01d1cda4 = () => interopDefault(import('..\\pages\\financing\\index.vue' /* webpackChunkName: "pages/financing/index" */))
const _414629cc = () => interopDefault(import('..\\pages\\gakuo\\index.vue' /* webpackChunkName: "pages/gakuo/index" */))
const _1db9245f = () => interopDefault(import('..\\pages\\gasaya\\index.vue' /* webpackChunkName: "pages/gasaya/index" */))
const _77b31d41 = () => interopDefault(import('..\\pages\\investor-success\\index.vue' /* webpackChunkName: "pages/investor-success/index" */))
const _110174f8 = () => interopDefault(import('..\\pages\\join-event\\index.vue' /* webpackChunkName: "pages/join-event/index" */))
const _7f2f5bc0 = () => interopDefault(import('..\\pages\\joseph\\index.vue' /* webpackChunkName: "pages/joseph/index" */))
const _363bc80c = () => interopDefault(import('..\\pages\\location\\index.vue' /* webpackChunkName: "pages/location/index" */))
const _9ab8cd28 = () => interopDefault(import('..\\pages\\management\\index.vue' /* webpackChunkName: "pages/management/index" */))
const _298c5dbf = () => interopDefault(import('..\\pages\\marketing\\index.vue' /* webpackChunkName: "pages/marketing/index" */))
const _2a623f58 = () => interopDefault(import('..\\pages\\meeting-success\\index.vue' /* webpackChunkName: "pages/meeting-success/index" */))
const _f31ecb80 = () => interopDefault(import('..\\pages\\newsletter-success\\index.vue' /* webpackChunkName: "pages/newsletter-success/index" */))
const _355c25d2 = () => interopDefault(import('..\\pages\\order\\index.vue' /* webpackChunkName: "pages/order/index" */))
const _435c01cc = () => interopDefault(import('..\\pages\\order-farm\\index.vue' /* webpackChunkName: "pages/order-farm/index" */))
const _645c1d30 = () => interopDefault(import('..\\pages\\our-services\\index.vue' /* webpackChunkName: "pages/our-services/index" */))
const _6c60d0c8 = () => interopDefault(import('..\\pages\\owner-success\\index.vue' /* webpackChunkName: "pages/owner-success/index" */))
const _6cd6a5dd = () => interopDefault(import('..\\pages\\privacy\\index.vue' /* webpackChunkName: "pages/privacy/index" */))
const _98c5522a = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _5f51e615 = () => interopDefault(import('..\\pages\\projects\\index.vue' /* webpackChunkName: "pages/projects/index" */))
const _8106509e = () => interopDefault(import('..\\pages\\services\\index.vue' /* webpackChunkName: "pages/services/index" */))
const _6125b899 = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _0d28ea50 = () => interopDefault(import('..\\pages\\simo-index.vue' /* webpackChunkName: "pages/simo-index" */))
const _0d5902fc = () => interopDefault(import('..\\pages\\success\\index.vue' /* webpackChunkName: "pages/success/index" */))
const _5424349a = () => interopDefault(import('..\\pages\\whishlist\\index.vue' /* webpackChunkName: "pages/whishlist/index" */))
const _22764aa1 = () => interopDefault(import('..\\pages\\winnie\\index.vue' /* webpackChunkName: "pages/winnie/index" */))
const _3d288ddb = () => interopDefault(import('..\\pages\\blog\\blog-copy.vue' /* webpackChunkName: "pages/blog/blog-copy" */))
const _1fd93205 = () => interopDefault(import('..\\pages\\blog\\index-copy.vue' /* webpackChunkName: "pages/blog/index-copy" */))
const _0fdb4a56 = () => interopDefault(import('..\\pages\\contact-us\\ali-index.vue' /* webpackChunkName: "pages/contact-us/ali-index" */))
const _4f87ac8c = () => interopDefault(import('..\\pages\\equipment\\list-farmland-equipment\\index.vue' /* webpackChunkName: "pages/equipment/list-farmland-equipment/index" */))
const _1df615e7 = () => interopDefault(import('..\\pages\\equipment\\rent-farmland-equipment\\index.vue' /* webpackChunkName: "pages/equipment/rent-farmland-equipment/index" */))
const _c581a3d0 = () => interopDefault(import('..\\pages\\global-auth\\login\\index.vue' /* webpackChunkName: "pages/global-auth/login/index" */))
const _2dd4fa60 = () => interopDefault(import('..\\pages\\global-auth\\register\\index.vue' /* webpackChunkName: "pages/global-auth/register/index" */))
const _eea1048e = () => interopDefault(import('..\\pages\\my-details\\account\\index.vue' /* webpackChunkName: "pages/my-details/account/index" */))
const _090306ee = () => interopDefault(import('..\\pages\\my-details\\equipments\\index.vue' /* webpackChunkName: "pages/my-details/equipments/index" */))
const _cfce642e = () => interopDefault(import('..\\pages\\my-details\\farms\\index.vue' /* webpackChunkName: "pages/my-details/farms/index" */))
const _06770583 = () => interopDefault(import('..\\pages\\services\\urlcopy.vue' /* webpackChunkName: "pages/services/urlcopy" */))
const _745aa678 = () => interopDefault(import('..\\pages\\my-details\\equipments\\index1.vue' /* webpackChunkName: "pages/my-details/equipments/index1" */))
const _39c4b5e3 = () => interopDefault(import('..\\pages\\equipment\\apply\\_url.vue' /* webpackChunkName: "pages/equipment/apply/_url" */))
const _40940faa = () => interopDefault(import('..\\pages\\equipment\\rent-farmland-equipment\\_url.vue' /* webpackChunkName: "pages/equipment/rent-farmland-equipment/_url" */))
const _17129f16 = () => interopDefault(import('..\\pages\\equipment\\rent-farmland-equipment\\_url1.vue' /* webpackChunkName: "pages/equipment/rent-farmland-equipment/_url1" */))
const _51f0036b = () => interopDefault(import('..\\pages\\auth\\_url.vue' /* webpackChunkName: "pages/auth/_url" */))
const _15d5a4e5 = () => interopDefault(import('..\\pages\\blog\\_url.vue' /* webpackChunkName: "pages/blog/_url" */))
const _780be818 = () => interopDefault(import('..\\pages\\brand\\_url.vue' /* webpackChunkName: "pages/brand/_url" */))
const _c8c3fa7a = () => interopDefault(import('..\\pages\\engage-expert\\_url.vue' /* webpackChunkName: "pages/engage-expert/_url" */))
const _26b8fd7f = () => interopDefault(import('..\\pages\\equipment\\_id.vue' /* webpackChunkName: "pages/equipment/_id" */))
const _3bb13cc2 = () => interopDefault(import('..\\pages\\farmlands\\_url.vue' /* webpackChunkName: "pages/farmlands/_url" */))
const _5b29f2fa = () => interopDefault(import('..\\pages\\join-event\\_url.vue' /* webpackChunkName: "pages/join-event/_url" */))
const _1322c6d0 = () => interopDefault(import('..\\pages\\order-farm\\_url.vue' /* webpackChunkName: "pages/order-farm/_url" */))
const _7279e61c = () => interopDefault(import('..\\pages\\product\\_url.vue' /* webpackChunkName: "pages/product/_url" */))
const _3ca86a3d = () => interopDefault(import('..\\pages\\projects\\_url.vue' /* webpackChunkName: "pages/projects/_url" */))
const _6f48a126 = () => interopDefault(import('..\\pages\\register\\_url.vue' /* webpackChunkName: "pages/register/_url" */))
const _19bcf48f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _2e525249 = () => interopDefault(import('..\\pages\\_category\\_subcategory\\index.vue' /* webpackChunkName: "pages/_category/_subcategory/index" */))

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
    component: _c486f910,
    name: "about"
  }, {
    path: "/blog",
    component: _a867ff26,
    name: "blog"
  }, {
    path: "/cart",
    component: _fea38ba2,
    name: "cart"
  }, {
    path: "/checkout",
    component: _d3d20c6e,
    name: "checkout"
  }, {
    path: "/contact-us",
    component: _5997e944,
    name: "contact-us"
  }, {
    path: "/engage-expert",
    component: _41e14362,
    name: "engage-expert"
  }, {
    path: "/equipment",
    component: _e74edd52,
    name: "equipment"
  }, {
    path: "/events",
    component: _6d8e8956,
    name: "events"
  }, {
    path: "/expert-success",
    component: _0e374baf,
    name: "expert-success"
  }, {
    path: "/farmlands",
    component: _69b1daf3,
    name: "farmlands"
  }, {
    path: "/financing",
    component: _01d1cda4,
    name: "financing"
  }, {
    path: "/gakuo",
    component: _414629cc,
    name: "gakuo"
  }, {
    path: "/gasaya",
    component: _1db9245f,
    name: "gasaya"
  }, {
    path: "/investor-success",
    component: _77b31d41,
    name: "investor-success"
  }, {
    path: "/join-event",
    component: _110174f8,
    name: "join-event"
  }, {
    path: "/joseph",
    component: _7f2f5bc0,
    name: "joseph"
  }, {
    path: "/location",
    component: _363bc80c,
    name: "location"
  }, {
    path: "/management",
    component: _9ab8cd28,
    name: "management"
  }, {
    path: "/marketing",
    component: _298c5dbf,
    name: "marketing"
  }, {
    path: "/meeting-success",
    component: _2a623f58,
    name: "meeting-success"
  }, {
    path: "/newsletter-success",
    component: _f31ecb80,
    name: "newsletter-success"
  }, {
    path: "/order",
    component: _355c25d2,
    name: "order"
  }, {
    path: "/order-farm",
    component: _435c01cc,
    name: "order-farm"
  }, {
    path: "/our-services",
    component: _645c1d30,
    name: "our-services"
  }, {
    path: "/owner-success",
    component: _6c60d0c8,
    name: "owner-success"
  }, {
    path: "/privacy",
    component: _6cd6a5dd,
    name: "privacy"
  }, {
    path: "/products",
    component: _98c5522a,
    name: "products"
  }, {
    path: "/projects",
    component: _5f51e615,
    name: "projects"
  }, {
    path: "/services",
    component: _8106509e,
    name: "services"
  }, {
    path: "/shop",
    component: _6125b899,
    name: "shop"
  }, {
    path: "/simo-index",
    component: _0d28ea50,
    name: "simo"
  }, {
    path: "/success",
    component: _0d5902fc,
    name: "success"
  }, {
    path: "/whishlist",
    component: _5424349a,
    name: "whishlist"
  }, {
    path: "/winnie",
    component: _22764aa1,
    name: "winnie"
  }, {
    path: "/blog/blog-copy",
    component: _3d288ddb,
    name: "blog-blog-copy"
  }, {
    path: "/blog/index-copy",
    component: _1fd93205,
    name: "blog-index-copy"
  }, {
    path: "/contact-us/ali-index",
    component: _0fdb4a56,
    name: "contact-us-ali"
  }, {
    path: "/equipment/list-farmland-equipment",
    component: _4f87ac8c,
    name: "equipment-list-farmland-equipment"
  }, {
    path: "/equipment/rent-farmland-equipment",
    component: _1df615e7,
    name: "equipment-rent-farmland-equipment"
  }, {
    path: "/global-auth/login",
    component: _c581a3d0,
    name: "global-auth-login"
  }, {
    path: "/global-auth/register",
    component: _2dd4fa60,
    name: "global-auth-register"
  }, {
    path: "/my-details/account",
    component: _eea1048e,
    name: "my-details-account"
  }, {
    path: "/my-details/equipments",
    component: _090306ee,
    name: "my-details-equipments"
  }, {
    path: "/my-details/farms",
    component: _cfce642e,
    name: "my-details-farms"
  }, {
    path: "/services/urlcopy",
    component: _06770583,
    name: "services-urlcopy"
  }, {
    path: "/my-details/equipments/index1",
    component: _745aa678,
    name: "my-details-equipments-index1"
  }, {
    path: "/equipment/apply/:url?",
    component: _39c4b5e3,
    name: "equipment-apply-url"
  }, {
    path: "/equipment/rent-farmland-equipment/:url?",
    component: _40940faa,
    name: "equipment-rent-farmland-equipment-url"
  }, {
    path: "/equipment/rent-farmland-equipment/:url1?",
    component: _17129f16,
    name: "equipment-rent-farmland-equipment-url1"
  }, {
    path: "/auth/:url?",
    component: _51f0036b,
    name: "auth-url"
  }, {
    path: "/blog/:url",
    component: _15d5a4e5,
    name: "blog-url"
  }, {
    path: "/brand/:url?",
    component: _780be818,
    name: "brand-url"
  }, {
    path: "/engage-expert/:url?",
    component: _c8c3fa7a,
    name: "engage-expert-url"
  }, {
    path: "/equipment/:id",
    component: _26b8fd7f,
    name: "equipment-id"
  }, {
    path: "/farmlands/:url",
    component: _3bb13cc2,
    name: "farmlands-url"
  }, {
    path: "/join-event/:url?",
    component: _5b29f2fa,
    name: "join-event-url"
  }, {
    path: "/order-farm/:url",
    component: _1322c6d0,
    name: "order-farm-url"
  }, {
    path: "/product/:url?",
    component: _7279e61c,
    name: "product-url"
  }, {
    path: "/projects/:url",
    component: _3ca86a3d,
    name: "projects-url"
  }, {
    path: "/register/:url?",
    component: _6f48a126,
    name: "register-url"
  }, {
    path: "/",
    component: _19bcf48f,
    name: "index"
  }, {
    path: "/:category/:subcategory",
    component: _2e525249,
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
