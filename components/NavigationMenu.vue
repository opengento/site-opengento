<template>
  <nav
    class="main-navigation fixed top-0 left-0"
    :class="{'hidden' : !menuOpened}"
  >
    <ul class="text-white font-dm">
      <li>
        <NuxtLink to="/events">
          Évènements
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">
          L'association
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/members">
          Les adhérents
        </NuxtLink>
        <ul>
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
