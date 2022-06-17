<template>
  <header class="relative flex items-center justify-between p-6 md:p-12">
    <NuxtLink class="flex justify-start items-center" to="/">
      <Logo />
      <div class="text-right">
        <span class="ml-4 md:ml-6 text-2xl md:text-3xl font-dm font-medium text-dark-gray tracking-wide">{{ name }}</span>
        <span class="block ml-4 md:ml-6 font-dm font-medium text-xs tracking-wide text-medium-gray" v-html="tagline" />
      </div>
    </NuxtLink>
    <div class="nav-container flex flex-col-reverse items-end md:items-center md:flex-row relative p-0">
      <Navigation :members="members" />
      <BurgerMenu />
    </div>
  </header>
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
      name: 'Opengento',
      tagline: 'we <span class="text-[10px] mr-1">🧡</span> e-commerce'
    }
  },
  computed: {
    ...mapState({
      members: state => state.members.data
    })
  }
}
</script>
