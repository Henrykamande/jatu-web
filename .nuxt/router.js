import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _24ce7e8c = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _23c452d9 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _0eb2e6ca = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _48ef9396 = () => interopDefault(import('..\\pages\\checkout\\index.vue' /* webpackChunkName: "pages/checkout/index" */))
const _07abbab0 = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _734f0563 = () => interopDefault(import('..\\pages\\engage-expert\\index.vue' /* webpackChunkName: "pages/engage-expert/index" */))
const _15e23b2a = () => interopDefault(import('..\\pages\\equipment\\index.vue' /* webpackChunkName: "pages/equipment/index" */))
const _6e881e7c = () => interopDefault(import('..\\pages\\events\\index.vue' /* webpackChunkName: "pages/events/index" */))
const _01ec871b = () => interopDefault(import('..\\pages\\expert-success\\index.vue' /* webpackChunkName: "pages/expert-success/index" */))
const _5b2fa7f2 = () => interopDefault(import('..\\pages\\farmlands\\index.vue' /* webpackChunkName: "pages/farmlands/index" */))
const _67cd6a42 = () => interopDefault(import('..\\pages\\financing\\index.vue' /* webpackChunkName: "pages/financing/index" */))
const _666ee62e = () => interopDefault(import('..\\pages\\gakuo\\index.vue' /* webpackChunkName: "pages/gakuo/index" */))
const _78e68bcb = () => interopDefault(import('..\\pages\\gasaya\\index.vue' /* webpackChunkName: "pages/gasaya/index" */))
const _53072dad = () => interopDefault(import('..\\pages\\investor-success\\index.vue' /* webpackChunkName: "pages/investor-success/index" */))
const _81d57338 = () => interopDefault(import('..\\pages\\join-event\\index.vue' /* webpackChunkName: "pages/join-event/index" */))
const _1b95b98c = () => interopDefault(import('..\\pages\\joseph\\index.vue' /* webpackChunkName: "pages/joseph/index" */))
const _2a535866 = () => interopDefault(import('..\\pages\\location\\index.vue' /* webpackChunkName: "pages/location/index" */))
const _60b76ad8 = () => interopDefault(import('..\\pages\\management\\index.vue' /* webpackChunkName: "pages/management/index" */))
const _db7aa25a = () => interopDefault(import('..\\pages\\marketing\\index.vue' /* webpackChunkName: "pages/marketing/index" */))
const _6dc11268 = () => interopDefault(import('..\\pages\\meeting-success\\index.vue' /* webpackChunkName: "pages/meeting-success/index" */))
const _45fb80a8 = () => interopDefault(import('..\\pages\\newsletter-success\\index.vue' /* webpackChunkName: "pages/newsletter-success/index" */))
const _6c63e82b = () => interopDefault(import('..\\pages\\order\\index.vue' /* webpackChunkName: "pages/order/index" */))
const _e7345ef4 = () => interopDefault(import('..\\pages\\order-farm\\index.vue' /* webpackChunkName: "pages/order-farm/index" */))
const _467d78c8 = () => interopDefault(import('..\\pages\\our-services\\index.vue' /* webpackChunkName: "pages/our-services/index" */))
const _5e0f3eb0 = () => interopDefault(import('..\\pages\\owner-success\\index.vue' /* webpackChunkName: "pages/owner-success/index" */))
const _77562bf1 = () => interopDefault(import('..\\pages\\privacy\\index.vue' /* webpackChunkName: "pages/privacy/index" */))
const _0de2d952 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _b679bafe = () => interopDefault(import('..\\pages\\projects\\index.vue' /* webpackChunkName: "pages/projects/index" */))
const _04ee141d = () => interopDefault(import('..\\pages\\services\\index.vue' /* webpackChunkName: "pages/services/index" */))
const _4dc3e9f6 = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _e632cb38 = () => interopDefault(import('..\\pages\\simo-index.vue' /* webpackChunkName: "pages/simo-index" */))
const _03d30496 = () => interopDefault(import('..\\pages\\success\\index.vue' /* webpackChunkName: "pages/success/index" */))
const _864af4a4 = () => interopDefault(import('..\\pages\\whishlist\\index.vue' /* webpackChunkName: "pages/whishlist/index" */))
const _7da3b20d = () => interopDefault(import('..\\pages\\winnie\\index.vue' /* webpackChunkName: "pages/winnie/index" */))
const _facc6b72 = () => interopDefault(import('..\\pages\\blog\\blog-copy.vue' /* webpackChunkName: "pages/blog/blog-copy" */))
const _eee0f9ce = () => interopDefault(import('..\\pages\\blog\\index-copy.vue' /* webpackChunkName: "pages/blog/index-copy" */))
const _2870d37e = () => interopDefault(import('..\\pages\\contact-us\\ali-index.vue' /* webpackChunkName: "pages/contact-us/ali-index" */))
const _304e0c10 = () => interopDefault(import('..\\pages\\equipment\\list-farmland-equipment\\index.vue' /* webpackChunkName: "pages/equipment/list-farmland-equipment/index" */))
const _9371395a = () => interopDefault(import('..\\pages\\equipment\\rent-farmland-equipment\\index.vue' /* webpackChunkName: "pages/equipment/rent-farmland-equipment/index" */))
const _185e58f8 = () => interopDefault(import('..\\pages\\global-auth\\login\\index.vue' /* webpackChunkName: "pages/global-auth/login/index" */))
const _0816d5e4 = () => interopDefault(import('..\\pages\\global-auth\\register\\index.vue' /* webpackChunkName: "pages/global-auth/register/index" */))
const _045285cd = () => interopDefault(import('..\\pages\\my-details\\account\\index.vue' /* webpackChunkName: "pages/my-details/account/index" */))
const _86b0e816 = () => interopDefault(import('..\\pages\\my-details\\equipments\\index.vue' /* webpackChunkName: "pages/my-details/equipments/index" */))
const _2746cafd = () => interopDefault(import('..\\pages\\my-details\\farms\\index.vue' /* webpackChunkName: "pages/my-details/farms/index" */))
const _96ea5222 = () => interopDefault(import('..\\pages\\services\\urlcopy.vue' /* webpackChunkName: "pages/services/urlcopy" */))
const _4f58f6e8 = () => interopDefault(import('..\\pages\\my-details\\equipments\\index1.vue' /* webpackChunkName: "pages/my-details/equipments/index1" */))
const _8562f00a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _86923012 = () => interopDefault(import('..\\pages\\equipment\\apply\\_url.vue' /* webpackChunkName: "pages/equipment/apply/_url" */))
const _bae16582 = () => interopDefault(import('..\\pages\\equipment\\rent-farmland-equipment\\_url.vue' /* webpackChunkName: "pages/equipment/rent-farmland-equipment/_url" */))
const _a13826fc = () => interopDefault(import('..\\pages\\equipment\\rent-farmland-equipment\\_url1.vue' /* webpackChunkName: "pages/equipment/rent-farmland-equipment/_url1" */))
const _5ca49902 = () => interopDefault(import('..\\pages\\auth\\_url.vue' /* webpackChunkName: "pages/auth/_url" */))
const _d4d9560e = () => interopDefault(import('..\\pages\\blog\\_url.vue' /* webpackChunkName: "pages/blog/_url" */))
const _3bf25e60 = () => interopDefault(import('..\\pages\\brand\\_url.vue' /* webpackChunkName: "pages/brand/_url" */))
const _1403292f = () => interopDefault(import('..\\pages\\engage-expert\\_url.vue' /* webpackChunkName: "pages/engage-expert/_url" */))
const _31388393 = () => interopDefault(import('..\\pages\\equipment\\_id.vue' /* webpackChunkName: "pages/equipment/_id" */))
const _a9a085c4 = () => interopDefault(import('..\\pages\\equipments\\_id.vue' /* webpackChunkName: "pages/equipments/_id" */))
const _27989e0b = () => interopDefault(import('..\\pages\\farmlands\\_url.vue' /* webpackChunkName: "pages/farmlands/_url" */))
const _783f77e4 = () => interopDefault(import('..\\pages\\join-event\\_url.vue' /* webpackChunkName: "pages/join-event/_url" */))
const _5f24edac = () => interopDefault(import('..\\pages\\order-farm\\_url.vue' /* webpackChunkName: "pages/order-farm/_url" */))
const _64b164f0 = () => interopDefault(import('..\\pages\\product\\_url.vue' /* webpackChunkName: "pages/product/_url" */))
const _4727f051 = () => interopDefault(import('..\\pages\\projects\\_url.vue' /* webpackChunkName: "pages/projects/_url" */))
const _79c8273a = () => interopDefault(import('..\\pages\\register\\_url.vue' /* webpackChunkName: "pages/register/_url" */))
const _db699f46 = () => interopDefault(import('..\\pages\\_category\\_subcategory\\index.vue' /* webpackChunkName: "pages/_category/_subcategory/index" */))

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
    component: _24ce7e8c,
    name: "about"
  }, {
    path: "/blog",
    component: _23c452d9,
    name: "blog"
  }, {
    path: "/cart",
    component: _0eb2e6ca,
    name: "cart"
  }, {
    path: "/checkout",
    component: _48ef9396,
    name: "checkout"
  }, {
    path: "/contact-us",
    component: _07abbab0,
    name: "contact-us"
  }, {
    path: "/engage-expert",
    component: _734f0563,
    name: "engage-expert"
  }, {
    path: "/equipment",
    component: _15e23b2a,
    name: "equipment"
  }, {
    path: "/events",
    component: _6e881e7c,
    name: "events"
  }, {
    path: "/expert-success",
    component: _01ec871b,
    name: "expert-success"
  }, {
    path: "/farmlands",
    component: _5b2fa7f2,
    name: "farmlands"
  }, {
    path: "/financing",
    component: _67cd6a42,
    name: "financing"
  }, {
    path: "/gakuo",
    component: _666ee62e,
    name: "gakuo"
  }, {
    path: "/gasaya",
    component: _78e68bcb,
    name: "gasaya"
  }, {
    path: "/investor-success",
    component: _53072dad,
    name: "investor-success"
  }, {
    path: "/join-event",
    component: _81d57338,
    name: "join-event"
  }, {
    path: "/joseph",
    component: _1b95b98c,
    name: "joseph"
  }, {
    path: "/location",
    component: _2a535866,
    name: "location"
  }, {
    path: "/management",
    component: _60b76ad8,
    name: "management"
  }, {
    path: "/marketing",
    component: _db7aa25a,
    name: "marketing"
  }, {
    path: "/meeting-success",
    component: _6dc11268,
    name: "meeting-success"
  }, {
    path: "/newsletter-success",
    component: _45fb80a8,
    name: "newsletter-success"
  }, {
    path: "/order",
    component: _6c63e82b,
    name: "order"
  }, {
    path: "/order-farm",
    component: _e7345ef4,
    name: "order-farm"
  }, {
    path: "/our-services",
    component: _467d78c8,
    name: "our-services"
  }, {
    path: "/owner-success",
    component: _5e0f3eb0,
    name: "owner-success"
  }, {
    path: "/privacy",
    component: _77562bf1,
    name: "privacy"
  }, {
    path: "/products",
    component: _0de2d952,
    name: "products"
  }, {
    path: "/projects",
    component: _b679bafe,
    name: "projects"
  }, {
    path: "/services",
    component: _04ee141d,
    name: "services"
  }, {
    path: "/shop",
    component: _4dc3e9f6,
    name: "shop"
  }, {
    path: "/simo-index",
    component: _e632cb38,
    name: "simo"
  }, {
    path: "/success",
    component: _03d30496,
    name: "success"
  }, {
    path: "/whishlist",
    component: _864af4a4,
    name: "whishlist"
  }, {
    path: "/winnie",
    component: _7da3b20d,
    name: "winnie"
  }, {
    path: "/blog/blog-copy",
    component: _facc6b72,
    name: "blog-blog-copy"
  }, {
    path: "/blog/index-copy",
    component: _eee0f9ce,
    name: "blog-index-copy"
  }, {
    path: "/contact-us/ali-index",
    component: _2870d37e,
    name: "contact-us-ali"
  }, {
    path: "/equipment/list-farmland-equipment",
    component: _304e0c10,
    name: "equipment-list-farmland-equipment"
  }, {
    path: "/equipment/rent-farmland-equipment",
    component: _9371395a,
    name: "equipment-rent-farmland-equipment"
  }, {
    path: "/global-auth/login",
    component: _185e58f8,
    name: "global-auth-login"
  }, {
    path: "/global-auth/register",
    component: _0816d5e4,
    name: "global-auth-register"
  }, {
    path: "/my-details/account",
    component: _045285cd,
    name: "my-details-account"
  }, {
    path: "/my-details/equipments",
    component: _86b0e816,
    name: "my-details-equipments"
  }, {
    path: "/my-details/farms",
    component: _2746cafd,
    name: "my-details-farms"
  }, {
    path: "/services/urlcopy",
    component: _96ea5222,
    name: "services-urlcopy"
  }, {
    path: "/my-details/equipments/index1",
    component: _4f58f6e8,
    name: "my-details-equipments-index1"
  }, {
    path: "/",
    component: _8562f00a,
    name: "index"
  }, {
    path: "/equipment/apply/:url?",
    component: _86923012,
    name: "equipment-apply-url"
  }, {
    path: "/equipment/rent-farmland-equipment/:url?",
    component: _bae16582,
    name: "equipment-rent-farmland-equipment-url"
  }, {
    path: "/equipment/rent-farmland-equipment/:url1?",
    component: _a13826fc,
    name: "equipment-rent-farmland-equipment-url1"
  }, {
    path: "/auth/:url?",
    component: _5ca49902,
    name: "auth-url"
  }, {
    path: "/blog/:url",
    component: _d4d9560e,
    name: "blog-url"
  }, {
    path: "/brand/:url?",
    component: _3bf25e60,
    name: "brand-url"
  }, {
    path: "/engage-expert/:url?",
    component: _1403292f,
    name: "engage-expert-url"
  }, {
    path: "/equipment/:id",
    component: _31388393,
    name: "equipment-id"
  }, {
    path: "/equipments/:id?",
    component: _a9a085c4,
    name: "equipments-id"
  }, {
    path: "/farmlands/:url",
    component: _27989e0b,
    name: "farmlands-url"
  }, {
    path: "/join-event/:url?",
    component: _783f77e4,
    name: "join-event-url"
  }, {
    path: "/order-farm/:url",
    component: _5f24edac,
    name: "order-farm-url"
  }, {
    path: "/product/:url?",
    component: _64b164f0,
    name: "product-url"
  }, {
    path: "/projects/:url",
    component: _4727f051,
    name: "projects-url"
  }, {
    path: "/register/:url?",
    component: _79c8273a,
    name: "register-url"
  }, {
    path: "/:category/:subcategory",
    component: _db699f46,
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
