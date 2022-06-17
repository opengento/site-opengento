<template>
  <VLazyImage class="block relative invisible w-[40vw] h-auto overflow-hidden" :src="src" use-picture />
</template>

<script>
import VLazyImage from 'v-lazy-image/v2'
import { gsap, Expo } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'PictureImg',
  components: {
    VLazyImage
  },
  props: {
    src: {
      type: String,
      default: '',
      required: true
    },
    lazy: {
      type: Boolean,
      default: true
    }
  },
  // eslint-disable-next-line
  mounted: function () {
    this.reveal(this.$el)
  },
  methods: {
    reveal (container) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: 'restart none none reset'
        }
      })
      tl.set(container, { autoAlpha: 1 })
      tl.from(container, 2, {
        yPercent: -200,
        ease: Expo.easeOut
      })
      tl.from(container.querySelector('img'), 2, {
        yPercent: 200,
        delay: -2,
        ease: Expo.easeOut
      })
    }
  }
}
</script>
