import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8fcf8fe6 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _498ce538 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _1e6f1efa = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _281afdd8 = () => interopDefault(import('..\\pages\\checkout\\index.vue' /* webpackChunkName: "pages/checkout/index" */))
const _b2a26c62 = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _4f68a438 = () => interopDefault(import('..\\pages\\engage-expert\\index.vue' /* webpackChunkName: "pages/engage-expert/index" */))
const _1c241928 = () => interopDefault(import('..\\pages\\equipment\\index.vue' /* webpackChunkName: "pages/equipment/index" */))
const _c2ad313e = () => interopDefault(import('..\\pages\\events\\index.vue' /* webpackChunkName: "pages/events/index" */))
const _3c84eeba = () => interopDefault(import('..\\pages\\expert-success\\index.vue' /* webpackChunkName: "pages/expert-success/index" */))
const _617185f0 = () => interopDefault(import('..\\pages\\farmlands\\index.vue' /* webpackChunkName: "pages/farmlands/index" */))
const _64ac7b43 = () => interopDefault(import('..\\pages\\financing\\index.vue' /* webpackChunkName: "pages/financing/index" */))
const _0c8ec0a2 = () => interopDefault(import('..\\pages\\gakuo\\index.vue' /* webpackChunkName: "pages/gakuo/index" */))
const _4ed4026a = () => interopDefault(import('..\\pages\\gasaya\\index.vue' /* webpackChunkName: "pages/gasaya/index" */))
const _4924298c = () => interopDefault(import('..\\pages\\investor-success\\index.vue' /* webpackChunkName: "pages/investor-success/index" */))
const _5e185583 = () => interopDefault(import('..\\pages\\join-event\\index.vue' /* webpackChunkName: "pages/join-event/index" */))
const _1cf99faa = () => interopDefault(import('..\\pages\\joseph\\index.vue' /* webpackChunkName: "pages/joseph/index" */))
const _3abda345 = () => interopDefault(import('..\\pages\\location\\index.vue' /* webpackChunkName: "pages/location/index" */))
const _008b0c12 = () => interopDefault(import('..\\pages\\management\\index.vue' /* webpackChunkName: "pages/management/index" */))
const _e1bc8058 = () => interopDefault(import('..\\pages\\marketing\\index.vue' /* webpackChunkName: "pages/marketing/index" */))
const _f394c2ae = () => interopDefault(import('..\\pages\\meeting-success\\index.vue' /* webpackChunkName: "pages/meeting-success/index" */))
const _8060806a = () => interopDefault(import('..\\pages\\newsletter-success\\index.vue' /* webpackChunkName: "pages/newsletter-success/index" */))
const _00a4bca8 = () => interopDefault(import('..\\pages\\order\\index.vue' /* webpackChunkName: "pages/order/index" */))
const _2b68dfa5 = () => interopDefault(import('..\\pages\\order-farm\\index.vue' /* webpackChunkName: "pages/order-farm/index" */))
const _7185f20a = () => interopDefault(import('..\\pages\\our-services\\index.vue' /* webpackChunkName: "pages/our-services/index" */))
const _79e8319e = () => interopDefault(import('..\\pages\\owner-success\\index.vue' /* webpackChunkName: "pages/owner-success/index" */))
const _5f178932 = () => interopDefault(import('..\\pages\\privacy\\index.vue' /* webpackChunkName: "pages/privacy/index" */))
const _0978de36 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _95a52540 = () => interopDefault(import('..\\pages\\projects\\index.vue' /* webpackChunkName: "pages/projects/index" */))
const _15585efc = () => interopDefault(import('..\\pages\\services\\index.vue' /* webpackChunkName: "pages/services/index" */))
const _0232c538 = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _c2ba7fb6 = () => interopDefault(import('..\\pages\\simo-index.vue' /* webpackChunkName: "pages/simo-index" */))
const _28d73c52 = () => interopDefault(import('..\\pages\\success\\index.vue' /* webpackChunkName: "pages/success/index" */))
const _8c8cd2a2 = () => interopDefault(import('..\\pages\\whishlist\\index.vue' /* webpackChunkName: "pages/whishlist/index" */))
const _539128ac = () => interopDefault(import('..\\pages\\winnie\\index.vue' /* webpackChunkName: "pages/winnie/index" */))
const _d9f7d5b4 = () => interopDefault(import('..\\pages\\blog\\blog-copy.vue' /* webpackChunkName: "pages/blog/blog-copy" */))
const _f522d7cc = () => interopDefault(import('..\\pages\\blog\\index-copy.vue' /* webpackChunkName: "pages/blog/index-copy" */))
const _265ffde0 = () => interopDefault(import('..\\pages\\contact-us\\ali-index.vue' /* webpackChunkName: "pages/contact-us/ali-index" */))
const _44385c17 = () => interopDefault(import('..\\pages\\equipment\\list-farmland-equipment\\index.vue' /* webpackChunkName: "pages/equipment/list-farmland-equipment/index" */))
const _12a6c572 = () => interopDefault(import('..\\pages\\equipment\\rent-farmland-equipment\\index.vue' /* webpackChunkName: "pages/equipment/rent-farmland-equipment/index" */))
const _52c358ba = () => interopDefault(import('..\\pages\\global-auth\\login\\index.vue' /* webpackChunkName: "pages/global-auth/login/index" */))
const _50676d65 = () => interopDefault(import('..\\pages\\global-auth\\register\\index.vue' /* webpackChunkName: "pages/global-auth/register/index" */))
const _538de60e = () => interopDefault(import('..\\pages\\services\\urlcopy.vue' /* webpackChunkName: "pages/services/urlcopy" */))
const _55a91790 = () => interopDefault(import('..\\pages\\equipment\\apply\\_url.vue' /* webpackChunkName: "pages/equipment/apply/_url" */))
const _6bbbab40 = () => interopDefault(import('..\\pages\\equipment\\rent-farmland-equipment\\_url.vue' /* webpackChunkName: "pages/equipment/rent-farmland-equipment/_url" */))
const _392c4d80 = () => interopDefault(import('..\\pages\\auth\\_url.vue' /* webpackChunkName: "pages/auth/_url" */))
const _b1610a8c = () => interopDefault(import('..\\pages\\blog\\_url.vue' /* webpackChunkName: "pages/blog/_url" */))
const _61baf0bf = () => interopDefault(import('..\\pages\\brand\\_url.vue' /* webpackChunkName: "pages/brand/_url" */))
const _030226e4 = () => interopDefault(import('..\\pages\\engage-expert\\_url.vue' /* webpackChunkName: "pages/engage-expert/_url" */))
const _3802e8ea = () => interopDefault(import('..\\pages\\farmlands\\_url.vue' /* webpackChunkName: "pages/farmlands/_url" */))
const _7e8155e2 = () => interopDefault(import('..\\pages\\join-event\\_url.vue' /* webpackChunkName: "pages/join-event/_url" */))
const _5c03fead = () => interopDefault(import('..\\pages\\order-farm\\_url.vue' /* webpackChunkName: "pages/order-farm/_url" */))
const _b8d677b2 = () => interopDefault(import('..\\pages\\product\\_url.vue' /* webpackChunkName: "pages/product/_url" */))
const _2ee94d92 = () => interopDefault(import('..\\pages\\projects\\_url.vue' /* webpackChunkName: "pages/projects/_url" */))
const _6189847b = () => interopDefault(import('..\\pages\\register\\_url.vue' /* webpackChunkName: "pages/register/_url" */))
const _40100d9a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _08d3eb9e = () => interopDefault(import('..\\pages\\_category\\_subcategory\\index.vue' /* webpackChunkName: "pages/_category/_subcategory/index" */))

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
    component: _8fcf8fe6,
    name: "about"
  }, {
    path: "/blog",
    component: _498ce538,
    name: "blog"
  }, {
    path: "/cart",
    component: _1e6f1efa,
    name: "cart"
  }, {
    path: "/checkout",
    component: _281afdd8,
    name: "checkout"
  }, {
    path: "/contact-us",
    component: _b2a26c62,
    name: "contact-us"
  }, {
    path: "/engage-expert",
    component: _4f68a438,
    name: "engage-expert"
  }, {
    path: "/equipment",
    component: _1c241928,
    name: "equipment"
  }, {
    path: "/events",
    component: _c2ad313e,
    name: "events"
  }, {
    path: "/expert-success",
    component: _3c84eeba,
    name: "expert-success"
  }, {
    path: "/farmlands",
    component: _617185f0,
    name: "farmlands"
  }, {
    path: "/financing",
    component: _64ac7b43,
    name: "financing"
  }, {
    path: "/gakuo",
    component: _0c8ec0a2,
    name: "gakuo"
  }, {
    path: "/gasaya",
    component: _4ed4026a,
    name: "gasaya"
  }, {
    path: "/investor-success",
    component: _4924298c,
    name: "investor-success"
  }, {
    path: "/join-event",
    component: _5e185583,
    name: "join-event"
  }, {
    path: "/joseph",
    component: _1cf99faa,
    name: "joseph"
  }, {
    path: "/location",
    component: _3abda345,
    name: "location"
  }, {
    path: "/management",
    component: _008b0c12,
    name: "management"
  }, {
    path: "/marketing",
    component: _e1bc8058,
    name: "marketing"
  }, {
    path: "/meeting-success",
    component: _f394c2ae,
    name: "meeting-success"
  }, {
    path: "/newsletter-success",
    component: _8060806a,
    name: "newsletter-success"
  }, {
    path: "/order",
    component: _00a4bca8,
    name: "order"
  }, {
    path: "/order-farm",
    component: _2b68dfa5,
    name: "order-farm"
  }, {
    path: "/our-services",
    component: _7185f20a,
    name: "our-services"
  }, {
    path: "/owner-success",
    component: _79e8319e,
    name: "owner-success"
  }, {
    path: "/privacy",
    component: _5f178932,
    name: "privacy"
  }, {
    path: "/products",
    component: _0978de36,
    name: "products"
  }, {
    path: "/projects",
    component: _95a52540,
    name: "projects"
  }, {
    path: "/services",
    component: _15585efc,
    name: "services"
  }, {
    path: "/shop",
    component: _0232c538,
    name: "shop"
  }, {
    path: "/simo-index",
    component: _c2ba7fb6,
    name: "simo"
  }, {
    path: "/success",
    component: _28d73c52,
    name: "success"
  }, {
    path: "/whishlist",
    component: _8c8cd2a2,
    name: "whishlist"
  }, {
    path: "/winnie",
    component: _539128ac,
    name: "winnie"
  }, {
    path: "/blog/blog-copy",
    component: _d9f7d5b4,
    name: "blog-blog-copy"
  }, {
    path: "/blog/index-copy",
    component: _f522d7cc,
    name: "blog-index-copy"
  }, {
    path: "/contact-us/ali-index",
    component: _265ffde0,
    name: "contact-us-ali"
  }, {
    path: "/equipment/list-farmland-equipment",
    component: _44385c17,
    name: "equipment-list-farmland-equipment"
  }, {
    path: "/equipment/rent-farmland-equipment",
    component: _12a6c572,
    name: "equipment-rent-farmland-equipment"
  }, {
    path: "/global-auth/login",
    component: _52c358ba,
    name: "global-auth-login"
  }, {
    path: "/global-auth/register",
    component: _50676d65,
    name: "global-auth-register"
  }, {
    path: "/services/urlcopy",
    component: _538de60e,
    name: "services-urlcopy"
  }, {
    path: "/equipment/apply/:url?",
    component: _55a91790,
    name: "equipment-apply-url"
  }, {
    path: "/equipment/rent-farmland-equipment/:url?",
    component: _6bbbab40,
    name: "equipment-rent-farmland-equipment-url"
  }, {
    path: "/auth/:url?",
    component: _392c4d80,
    name: "auth-url"
  }, {
    path: "/blog/:url",
    component: _b1610a8c,
    name: "blog-url"
  }, {
    path: "/brand/:url?",
    component: _61baf0bf,
    name: "brand-url"
  }, {
    path: "/engage-expert/:url?",
    component: _030226e4,
    name: "engage-expert-url"
  }, {
    path: "/farmlands/:url",
    component: _3802e8ea,
    name: "farmlands-url"
  }, {
    path: "/join-event/:url?",
    component: _7e8155e2,
    name: "join-event-url"
  }, {
    path: "/order-farm/:url",
    component: _5c03fead,
    name: "order-farm-url"
  }, {
    path: "/product/:url?",
    component: _b8d677b2,
    name: "product-url"
  }, {
    path: "/projects/:url",
    component: _2ee94d92,
    name: "projects-url"
  }, {
    path: "/register/:url?",
    component: _6189847b,
    name: "register-url"
  }, {
    path: "/",
    component: _40100d9a,
    name: "index"
  }, {
    path: "/:category/:subcategory",
    component: _08d3eb9e,
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
