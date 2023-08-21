<template>
  <v-app
    id="App"
  >
    <AppMenu />
    <AppHeader />
    <Snackbar />
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from '~/components/skeleton/AppBar.vue'
import AppMenu from '~/components/skeleton/AppMenu.vue'
import Snackbar from '~/components/skeleton/Snackbar.vue'

export default {
  components: {
    AppHeader,
    AppMenu,
    Snackbar
  }
}
</script>
