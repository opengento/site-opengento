<template>
  <div class="relative flex items-center justify-between p-12">
    <NuxtLink class="flex justify-start items-center" to="/">
      <Logo />
      <span class="ml-6 text-3xl font-dm font-medium text-white tracking-wide">{{ name }}</span>
    </NuxtLink>
    <BurgerMenu />
    <Navigation :members="members" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Navigation from './NavigationMenu'
import BurgerMenu from './BurgerMenu'
import Logo from '~/assets/svg/logo.svg?inline'

export default {
  name: 'HeaderItem',
  components: { Logo, Navigation, BurgerMenu },
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
  },
  computed: {
    ...mapState({
      members: state => state.members.data
    })
  }
}
</script>
