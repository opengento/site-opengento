<template>
  <div>
    <Header />
    <Index />
    <Nuxt />
  </div>
</template>

<script>
import Header from '~/components/HeaderItem'
import Index from '~/components/IndexContent'

export default {
  components: { Header, Index }
}
</script>
