<template>
  <div class="flex">
    <nuxt-content :document="index" />
    <PictureImg src="/img/home-banner.jpeg" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PictureImg from './PictureImg'

export default {
  name: 'IndexContent',
  components: {
    PictureImg
  },
  computed: {
    ...mapState({
      index: state => state.index.data
    })
  }
}
</script>
