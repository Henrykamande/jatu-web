export const AliFooter = () => import('../..\\components\\ali-footer.vue' /* webpackChunkName: "components/ali-footer" */).then(c => wrapFunctional(c.default || c))
export const DeskMenuCopy = () => import('../..\\components\\desk-menu-copy.vue' /* webpackChunkName: "components/desk-menu-copy" */).then(c => wrapFunctional(c.default || c))
export const DesktopMenu = () => import('../..\\components\\desktop-menu.vue' /* webpackChunkName: "components/desktop-menu" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../..\\components\\header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const HomeHeader = () => import('../..\\components\\home-header.vue' /* webpackChunkName: "components/home-header" */).then(c => wrapFunctional(c.default || c))
export const Login = () => import('../..\\components\\login.vue' /* webpackChunkName: "components/login" */).then(c => wrapFunctional(c.default || c))
export const Logo = () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const MobileCopy = () => import('../..\\components\\mobile-copy.vue' /* webpackChunkName: "components/mobile-copy" */).then(c => wrapFunctional(c.default || c))
export const MobileMenu = () => import('../..\\components\\mobile-menu.vue' /* webpackChunkName: "components/mobile-menu" */).then(c => wrapFunctional(c.default || c))
export const Modal = () => import('../..\\components\\modal.vue' /* webpackChunkName: "components/modal" */).then(c => wrapFunctional(c.default || c))
export const Product = () => import('../..\\components\\product.vue' /* webpackChunkName: "components/product" */).then(c => wrapFunctional(c.default || c))
export const Register = () => import('../..\\components\\register.vue' /* webpackChunkName: "components/register" */).then(c => wrapFunctional(c.default || c))
export const TopBar = () => import('../..\\components\\top-bar.vue' /* webpackChunkName: "components/top-bar" */).then(c => wrapFunctional(c.default || c))
export const WhatsappModal = () => import('../..\\components\\whatsapp-modal.vue' /* webpackChunkName: "components/whatsapp-modal" */).then(c => wrapFunctional(c.default || c))
export const HomeAbout = () => import('../..\\components\\home\\about.vue' /* webpackChunkName: "components/home-about" */).then(c => wrapFunctional(c.default || c))
export const HomeClearance = () => import('../..\\components\\home\\clearance.vue' /* webpackChunkName: "components/home-clearance" */).then(c => wrapFunctional(c.default || c))
export const HomeDesktopMenuCopy = () => import('../..\\components\\home\\desktop-menu-copy.vue' /* webpackChunkName: "components/home-desktop-menu-copy" */).then(c => wrapFunctional(c.default || c))
export const HomeHotmaxSlider = () => import('../..\\components\\home\\hotmax-slider.vue' /* webpackChunkName: "components/home-hotmax-slider" */).then(c => wrapFunctional(c.default || c))
export const HomeMegaMenu = () => import('../..\\components\\home\\mega-menu.vue' /* webpackChunkName: "components/home-mega-menu" */).then(c => wrapFunctional(c.default || c))
export const HomeOffers = () => import('../..\\components\\home\\offers.vue' /* webpackChunkName: "components/home-offers" */).then(c => wrapFunctional(c.default || c))
export const HomeSliderCopy = () => import('../..\\components\\home\\slider-copy.vue' /* webpackChunkName: "components/home-slider-copy" */).then(c => wrapFunctional(c.default || c))
export const HomeSlider = () => import('../..\\components\\home\\slider.vue' /* webpackChunkName: "components/home-slider" */).then(c => wrapFunctional(c.default || c))
export const HomeSlider2 = () => import('../..\\components\\home\\slider2.vue' /* webpackChunkName: "components/home-slider2" */).then(c => wrapFunctional(c.default || c))
export const HomeTrending = () => import('../..\\components\\home\\trending.vue' /* webpackChunkName: "components/home-trending" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
