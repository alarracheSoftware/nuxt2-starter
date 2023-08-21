<template>
  <v-list>
    <v-list-item
      v-for="route in routers"
      :key="route.path"
      link
      router
      :to="{ path: route.path }"
      ripple
    >
      <v-list-item-icon>
        <v-icon> {{ route.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title> {{ route.text }} </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'ListRouter',
  data () {
    return {
      routers: [
        { text: this.$t('menu.home'), icon: 'mdi-view-dashboard', path: '/' },
        { text: this.$t('menu.first'), icon: 'mdi-code-json', path: '/page1' },
        { text: this.$t('menu.second'), icon: 'mdi-server', path: '/page2' }
      ]
    }
  }
}
</script>
