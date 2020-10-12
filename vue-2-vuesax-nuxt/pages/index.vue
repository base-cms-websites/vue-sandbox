<template>
  <div class="container">
    <header class="content-logos">
      <Logo />
    </header>
    <main>
      <div class="ebm-page--header">
        <h1 class="ebm-page--header__title">Endeavor Business Media</h1>
        <h2 class="ebm-page--header__subtitle">Vue2 + Vuesax + Nuxt</h2>
      </div>
      <div class="ebm-page--content">
        <Card />
      </div>
    </main>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Card from '~/components/Card.vue'

export default {
  components: {
    Logo,
    Card,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1366px;
}
.ebm-page--header {
  margin-bottom: 20px;
  text-align: center;
}
</style>
