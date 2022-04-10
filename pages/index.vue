<template>
  <div />
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'IndexPage',
  async fetch ({ params, store: { dispatch, getters } }) {
    await dispatch('getMembers')
    await dispatch('getIndex')
  },
  computed: {
    ...mapState({
      members: state => state.members.data,
      index: state => state.index.data
    })
  }
}
</script>
