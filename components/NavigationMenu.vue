<template>
  <nav
    class="main-navigation md:relative h-[100vh] md:h-auto flex items-start md:items-center fixed top-0 right-0 pt-24 md:pt-0 bg-lighter-gray md:bg-transparent translate-x-0 md:translate-x-0 transform-gpu transition-transform"
    :class="{'translate-x-full md:hidden' : !menuOpened}"
  >
    <ul class="flex flex-col md:flex-row text-dark-gray font-dm">
      <li class="block mr-2">
        <NuxtLink class="block px-4 py-2" to="/events">
          <i class="mr-2 not-italic">🎉</i>
          <span>Évènements</span>
        </NuxtLink>
      </li>
      <li class="block mr-2">
        <NuxtLink class="block px-4 py-2" to="/about">
          <i class="mr-2 not-italic">🧑‍💻</i>
          <span>L'association</span>
        </NuxtLink>
      </li>
      <li class=" block mr-2">
        <NuxtLink class="block px-4 py-2" to="/members">
          <i class="mr-2 not-italic">💾</i>
          <span>Les adhérents</span>
        </NuxtLink>
        <ul class="hidden">
          <li v-for="member in members" :key="member.slug">
            <NuxtLink :to="member.path">
              {{ member.title }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NavigationMenu',
  props: {
    members: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed:
    mapState({
      menuOpened: state => state.menuOpened
    })
}
</script>
