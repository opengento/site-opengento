<template>
  <nav class="main-navigation">
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
export default {
  name: 'NavigationMenu',
  props: {
    members: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>
