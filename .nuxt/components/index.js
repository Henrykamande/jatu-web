export { default as AliFooter } from '../..\\components\\ali-footer.vue'
export { default as DeskMenuCopy } from '../..\\components\\desk-menu-copy.vue'
export { default as DesktopMenu } from '../..\\components\\desktop-menu.vue'
export { default as Footer } from '../..\\components\\footer.vue'
export { default as Header } from '../..\\components\\header.vue'
export { default as HomeHeader } from '../..\\components\\home-header.vue'
export { default as Login } from '../..\\components\\login.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as MobileCopy } from '../..\\components\\mobile-copy.vue'
export { default as MobileMenu } from '../..\\components\\mobile-menu.vue'
export { default as Modal } from '../..\\components\\modal.vue'
export { default as Product } from '../..\\components\\product.vue'
export { default as Register } from '../..\\components\\register.vue'
export { default as TopBar } from '../..\\components\\top-bar.vue'
export { default as WhatsappModal } from '../..\\components\\whatsapp-modal.vue'
export { default as HomeAbout } from '../..\\components\\home\\about.vue'
export { default as HomeClearance } from '../..\\components\\home\\clearance.vue'
export { default as HomeDesktopMenuCopy } from '../..\\components\\home\\desktop-menu-copy.vue'
export { default as HomeHotmaxSlider } from '../..\\components\\home\\hotmax-slider.vue'
export { default as HomeMegaMenu } from '../..\\components\\home\\mega-menu.vue'
export { default as HomeOffers } from '../..\\components\\home\\offers.vue'
export { default as HomeSliderCopy } from '../..\\components\\home\\slider-copy.vue'
export { default as HomeSlider } from '../..\\components\\home\\slider.vue'
export { default as HomeSlider2 } from '../..\\components\\home\\slider2.vue'
export { default as HomeTrending } from '../..\\components\\home\\trending.vue'

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
