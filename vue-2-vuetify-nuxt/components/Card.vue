<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <v-card-title class="headline"> Vue2 + Vuetify + Nuxt </v-card-title>
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
    <v-card-text>
      <p>This is an example of a card</p>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" nuxt to="/inspire"> Read More </v-btn>
    </v-card-actions>
  </v-card>
</template>
