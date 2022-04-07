<template>
  <div class="relative p-12">
    <NuxtLink class="flex justify-start items-center" to="/">
      <Logo />
      <span class="ml-4 text-lg font-dm font-bold text-white">{{ name }}</span>
    </NuxtLink>
  </div>
</template>

<script>
import Logo from '~/assets/svg/logo.svg?inline'

export default {
  name: 'HeaderItem',
  components: { Logo },
  data () {
    return {
      name: 'Opengento'
    }
  },
  head: {
    bodyAttrs: {
      class: 'bg-dark-gray'
    },
    htmlAttrs: {
      class: 'dark'
    }
  }
}
</script>
