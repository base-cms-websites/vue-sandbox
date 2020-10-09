<template>
  <div class="container">
    <div>
      <header class="content-logos">
        <logo />
      </header>
      <h1 class="title">Endeavor Business Media</h1>
      <h2 class="subtitle">Vue2 + Vuesax + Nuxt</h2>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.container {
  text-align: center;
}
</style>
