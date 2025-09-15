import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6f9004b5 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _79d638e0 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _d011c55c = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _4a23936c = () => interopDefault(import('..\\pages\\checkout\\index.vue' /* webpackChunkName: "pages/checkout/index" */))
const _3ce4a627 = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _03bf5ae8 = () => interopDefault(import('..\\pages\\engage-expert\\index.vue' /* webpackChunkName: "pages/engage-expert/index" */))
const _59df2c14 = () => interopDefault(import('..\\pages\\equipment\\index.vue' /* webpackChunkName: "pages/equipment/index" */))
const _53a9a08e = () => interopDefault(import('..\\pages\\events\\index.vue' /* webpackChunkName: "pages/events/index" */))
const _5d7641dc = () => interopDefault(import('..\\pages\\expert-success\\index.vue' /* webpackChunkName: "pages/expert-success/index" */))
const _373875b0 = () => interopDefault(import('..\\pages\\farmlands\\index.vue' /* webpackChunkName: "pages/farmlands/index" */))
const _66c4982a = () => interopDefault(import('..\\pages\\financing\\index.vue' /* webpackChunkName: "pages/financing/index" */))
const _9d9f2752 = () => interopDefault(import('..\\pages\\gakuo\\index.vue' /* webpackChunkName: "pages/gakuo/index" */))
const _f3546a7c = () => interopDefault(import('..\\pages\\gasaya\\index.vue' /* webpackChunkName: "pages/gasaya/index" */))
const _a4ad3838 = () => interopDefault(import('..\\pages\\investor-success\\index.vue' /* webpackChunkName: "pages/investor-success/index" */))
const _17639c4a = () => interopDefault(import('..\\pages\\join-event\\index.vue' /* webpackChunkName: "pages/join-event/index" */))
const _2904f883 = () => interopDefault(import('..\\pages\\joseph\\index.vue' /* webpackChunkName: "pages/joseph/index" */))
const _ce2294c6 = () => interopDefault(import('..\\pages\\location\\index.vue' /* webpackChunkName: "pages/location/index" */))
const _d41f5362 = () => interopDefault(import('..\\pages\\management\\index.vue' /* webpackChunkName: "pages/management/index" */))
const _11da0f08 = () => interopDefault(import('..\\pages\\marketing\\index.vue' /* webpackChunkName: "pages/marketing/index" */))
const _ed188d5e = () => interopDefault(import('..\\pages\\meeting-success\\index.vue' /* webpackChunkName: "pages/meeting-success/index" */))
const _17efc423 = () => interopDefault(import('..\\pages\\newsletter-success\\index.vue' /* webpackChunkName: "pages/newsletter-success/index" */))
const _91b52358 = () => interopDefault(import('..\\pages\\order\\index.vue' /* webpackChunkName: "pages/order/index" */))
const _7cc28806 = () => interopDefault(import('..\\pages\\order-farm\\index.vue' /* webpackChunkName: "pages/order-farm/index" */))
const _b125a55a = () => interopDefault(import('..\\pages\\our-services\\index.vue' /* webpackChunkName: "pages/our-services/index" */))
const _2e3ee84e = () => interopDefault(import('..\\pages\\owner-success\\index.vue' /* webpackChunkName: "pages/owner-success/index" */))
const _17cecbda = () => interopDefault(import('..\\pages\\privacy\\index.vue' /* webpackChunkName: "pages/privacy/index" */))
const _67a9f08e = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _135e7fb8 = () => interopDefault(import('..\\pages\\projects\\index.vue' /* webpackChunkName: "pages/projects/index" */))
const _73897154 = () => interopDefault(import('..\\pages\\services\\index.vue' /* webpackChunkName: "pages/services/index" */))
const _786e9bbc = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _3f7596cd = () => interopDefault(import('..\\pages\\simo-index.vue' /* webpackChunkName: "pages/simo-index" */))
const _b768b702 = () => interopDefault(import('..\\pages\\success\\index.vue' /* webpackChunkName: "pages/success/index" */))
const _21aacf57 = () => interopDefault(import('..\\pages\\whishlist\\index.vue' /* webpackChunkName: "pages/whishlist/index" */))
const _e9da1df8 = () => interopDefault(import('..\\pages\\winnie\\index.vue' /* webpackChunkName: "pages/winnie/index" */))
const _1d95b104 = () => interopDefault(import('..\\pages\\blog\\blog-copy.vue' /* webpackChunkName: "pages/blog/blog-copy" */))
const _2540667c = () => interopDefault(import('..\\pages\\blog\\index-copy.vue' /* webpackChunkName: "pages/blog/index-copy" */))
const _89c02390 = () => interopDefault(import('..\\pages\\contact-us\\ali-index.vue' /* webpackChunkName: "pages/contact-us/ali-index" */))
const _83969f22 = () => interopDefault(import('..\\pages\\equipment\\list-farmland-equipment\\index.vue' /* webpackChunkName: "pages/equipment/list-farmland-equipment/index" */))
const _e6b9cc6c = () => interopDefault(import('..\\pages\\equipment\\rent-farmland-equipment\\index.vue' /* webpackChunkName: "pages/equipment/rent-farmland-equipment/index" */))
const _2ebe57fb = () => interopDefault(import('..\\pages\\global-auth\\login\\index.vue' /* webpackChunkName: "pages/global-auth/login/index" */))
const _f37e2be6 = () => interopDefault(import('..\\pages\\global-auth\\register\\index.vue' /* webpackChunkName: "pages/global-auth/register/index" */))
const _27159036 = () => interopDefault(import('..\\pages\\my-details\\account\\index.vue' /* webpackChunkName: "pages/my-details/account/index" */))
const _03bffcec = () => interopDefault(import('..\\pages\\my-details\\equipments\\index.vue' /* webpackChunkName: "pages/my-details/equipments/index" */))
const _20eb5ba6 = () => interopDefault(import('..\\pages\\my-details\\farms\\index.vue' /* webpackChunkName: "pages/my-details/farms/index" */))
const _2c787b34 = () => interopDefault(import('..\\pages\\services\\urlcopy.vue' /* webpackChunkName: "pages/services/urlcopy" */))
const _74493275 = () => interopDefault(import('..\\pages\\my-details\\equipments\\index1.vue' /* webpackChunkName: "pages/my-details/equipments/index1" */))
const _f4a8a41c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _4f2ce240 = () => interopDefault(import('..\\pages\\equipment\\apply\\_url.vue' /* webpackChunkName: "pages/equipment/apply/_url" */))
const _bd912830 = () => interopDefault(import('..\\pages\\equipment\\rent-farmland-equipment\\_url.vue' /* webpackChunkName: "pages/equipment/rent-farmland-equipment/_url" */))
const _f480ba0e = () => interopDefault(import('..\\pages\\equipment\\rent-farmland-equipment\\_url1.vue' /* webpackChunkName: "pages/equipment/rent-farmland-equipment/_url1" */))
const _f786a030 = () => interopDefault(import('..\\pages\\auth\\_url.vue' /* webpackChunkName: "pages/auth/_url" */))
const _48225162 = () => interopDefault(import('..\\pages\\blog\\_url.vue' /* webpackChunkName: "pages/blog/_url" */))
const _497a21d2 = () => interopDefault(import('..\\pages\\brand\\_url.vue' /* webpackChunkName: "pages/brand/_url" */))
const _42a1da34 = () => interopDefault(import('..\\pages\\engage-expert\\_url.vue' /* webpackChunkName: "pages/engage-expert/_url" */))
const _5c9db908 = () => interopDefault(import('..\\pages\\equipment\\_id.vue' /* webpackChunkName: "pages/equipment/_id" */))
const _19cb1a55 = () => interopDefault(import('..\\pages\\equipments\\_id.vue' /* webpackChunkName: "pages/equipments/_id" */))
const _d398097c = () => interopDefault(import('..\\pages\\farmlands\\_url.vue' /* webpackChunkName: "pages/farmlands/_url" */))
const _28b08db7 = () => interopDefault(import('..\\pages\\join-event\\_url.vue' /* webpackChunkName: "pages/join-event/_url" */))
const _78159156 = () => interopDefault(import('..\\pages\\order-farm\\_url.vue' /* webpackChunkName: "pages/order-farm/_url" */))
const _49d2e702 = () => interopDefault(import('..\\pages\\product\\_url.vue' /* webpackChunkName: "pages/product/_url" */))
const _30bedf8c = () => interopDefault(import('..\\pages\\projects\\_url.vue' /* webpackChunkName: "pages/projects/_url" */))
const _1a40c723 = () => interopDefault(import('..\\pages\\register\\_url.vue' /* webpackChunkName: "pages/register/_url" */))
const _2e40de46 = () => interopDefault(import('..\\pages\\_category\\_subcategory\\index.vue' /* webpackChunkName: "pages/_category/_subcategory/index" */))

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
    component: _6f9004b5,
    name: "about"
  }, {
    path: "/blog",
    component: _79d638e0,
    name: "blog"
  }, {
    path: "/cart",
    component: _d011c55c,
    name: "cart"
  }, {
    path: "/checkout",
    component: _4a23936c,
    name: "checkout"
  }, {
    path: "/contact-us",
    component: _3ce4a627,
    name: "contact-us"
  }, {
    path: "/engage-expert",
    component: _03bf5ae8,
    name: "engage-expert"
  }, {
    path: "/equipment",
    component: _59df2c14,
    name: "equipment"
  }, {
    path: "/events",
    component: _53a9a08e,
    name: "events"
  }, {
    path: "/expert-success",
    component: _5d7641dc,
    name: "expert-success"
  }, {
    path: "/farmlands",
    component: _373875b0,
    name: "farmlands"
  }, {
    path: "/financing",
    component: _66c4982a,
    name: "financing"
  }, {
    path: "/gakuo",
    component: _9d9f2752,
    name: "gakuo"
  }, {
    path: "/gasaya",
    component: _f3546a7c,
    name: "gasaya"
  }, {
    path: "/investor-success",
    component: _a4ad3838,
    name: "investor-success"
  }, {
    path: "/join-event",
    component: _17639c4a,
    name: "join-event"
  }, {
    path: "/joseph",
    component: _2904f883,
    name: "joseph"
  }, {
    path: "/location",
    component: _ce2294c6,
    name: "location"
  }, {
    path: "/management",
    component: _d41f5362,
    name: "management"
  }, {
    path: "/marketing",
    component: _11da0f08,
    name: "marketing"
  }, {
    path: "/meeting-success",
    component: _ed188d5e,
    name: "meeting-success"
  }, {
    path: "/newsletter-success",
    component: _17efc423,
    name: "newsletter-success"
  }, {
    path: "/order",
    component: _91b52358,
    name: "order"
  }, {
    path: "/order-farm",
    component: _7cc28806,
    name: "order-farm"
  }, {
    path: "/our-services",
    component: _b125a55a,
    name: "our-services"
  }, {
    path: "/owner-success",
    component: _2e3ee84e,
    name: "owner-success"
  }, {
    path: "/privacy",
    component: _17cecbda,
    name: "privacy"
  }, {
    path: "/products",
    component: _67a9f08e,
    name: "products"
  }, {
    path: "/projects",
    component: _135e7fb8,
    name: "projects"
  }, {
    path: "/services",
    component: _73897154,
    name: "services"
  }, {
    path: "/shop",
    component: _786e9bbc,
    name: "shop"
  }, {
    path: "/simo-index",
    component: _3f7596cd,
    name: "simo"
  }, {
    path: "/success",
    component: _b768b702,
    name: "success"
  }, {
    path: "/whishlist",
    component: _21aacf57,
    name: "whishlist"
  }, {
    path: "/winnie",
    component: _e9da1df8,
    name: "winnie"
  }, {
    path: "/blog/blog-copy",
    component: _1d95b104,
    name: "blog-blog-copy"
  }, {
    path: "/blog/index-copy",
    component: _2540667c,
    name: "blog-index-copy"
  }, {
    path: "/contact-us/ali-index",
    component: _89c02390,
    name: "contact-us-ali"
  }, {
    path: "/equipment/list-farmland-equipment",
    component: _83969f22,
    name: "equipment-list-farmland-equipment"
  }, {
    path: "/equipment/rent-farmland-equipment",
    component: _e6b9cc6c,
    name: "equipment-rent-farmland-equipment"
  }, {
    path: "/global-auth/login",
    component: _2ebe57fb,
    name: "global-auth-login"
  }, {
    path: "/global-auth/register",
    component: _f37e2be6,
    name: "global-auth-register"
  }, {
    path: "/my-details/account",
    component: _27159036,
    name: "my-details-account"
  }, {
    path: "/my-details/equipments",
    component: _03bffcec,
    name: "my-details-equipments"
  }, {
    path: "/my-details/farms",
    component: _20eb5ba6,
    name: "my-details-farms"
  }, {
    path: "/services/urlcopy",
    component: _2c787b34,
    name: "services-urlcopy"
  }, {
    path: "/my-details/equipments/index1",
    component: _74493275,
    name: "my-details-equipments-index1"
  }, {
    path: "/",
    component: _f4a8a41c,
    name: "index"
  }, {
    path: "/equipment/apply/:url?",
    component: _4f2ce240,
    name: "equipment-apply-url"
  }, {
    path: "/equipment/rent-farmland-equipment/:url?",
    component: _bd912830,
    name: "equipment-rent-farmland-equipment-url"
  }, {
    path: "/equipment/rent-farmland-equipment/:url1?",
    component: _f480ba0e,
    name: "equipment-rent-farmland-equipment-url1"
  }, {
    path: "/auth/:url?",
    component: _f786a030,
    name: "auth-url"
  }, {
    path: "/blog/:url",
    component: _48225162,
    name: "blog-url"
  }, {
    path: "/brand/:url?",
    component: _497a21d2,
    name: "brand-url"
  }, {
    path: "/engage-expert/:url?",
    component: _42a1da34,
    name: "engage-expert-url"
  }, {
    path: "/equipment/:id",
    component: _5c9db908,
    name: "equipment-id"
  }, {
    path: "/equipments/:id?",
    component: _19cb1a55,
    name: "equipments-id"
  }, {
    path: "/farmlands/:url",
    component: _d398097c,
    name: "farmlands-url"
  }, {
    path: "/join-event/:url?",
    component: _28b08db7,
    name: "join-event-url"
  }, {
    path: "/order-farm/:url",
    component: _78159156,
    name: "order-farm-url"
  }, {
    path: "/product/:url?",
    component: _49d2e702,
    name: "product-url"
  }, {
    path: "/projects/:url",
    component: _30bedf8c,
    name: "projects-url"
  }, {
    path: "/register/:url?",
    component: _1a40c723,
    name: "register-url"
  }, {
    path: "/:category/:subcategory",
    component: _2e40de46,
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
