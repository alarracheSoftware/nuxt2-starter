<template>
  <v-app-bar app dark fixed clipped-left color="primary">
    <v-app-bar-nav-icon dark @click.stop="setMenu(!menu)" />
    <v-toolbar-title> {{ title }} </v-toolbar-title>
  </v-app-bar>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'Header',
  computed: {
    menu () {
      return this.$store.state.menu
    },
    title () {
      if (this.$config.environment === 'integration') {
        return `${this.$config.title} ${this.$t('integration')}`
      }
      if (this.$config.environment === 'production') {
        return this.$config.title
      }
      return `${this.$config.title} ${this.$t('development')}`
    }
  },
  methods: mapActions({
    setMenu: 'SET_MENU'
  })
}
</script>
