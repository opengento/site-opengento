<template>
  <div class="text-white">
    <nuxt-content :document="member" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const member = await $content('members', params.slug).fetch()

    return { member }
  }
}
</script>
