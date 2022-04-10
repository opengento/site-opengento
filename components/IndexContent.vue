<template>
  <div class="text-white">
    Index Content test
    <nuxt-content :document="index" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'IndexContent',
  computed: {
    ...mapState({
      index: state => state.index.data
    })
  }
}
</script>
