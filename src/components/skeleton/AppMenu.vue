<template>
  <v-navigation-drawer
    v-model="menu"
    app
    clipped
    fixed
    disable-route-watcher
    width="300"
  >
    <ListRouter />
    <LangSwitch />
    <v-spacer />
    <template #append>
      <ThemeButton />
      <GithubButton />
    </template>
  </v-navigation-drawer>
</template>

<script>

import ListRouter from '@/components/skeleton/menu/ListRouter.vue'
import LangSwitch from '@/components/skeleton/menu/LangSwitch.vue'
import GithubButton from '@/components/skeleton/menu/GithubButton.vue'
import ThemeButton from '@/components/skeleton/menu/ThemeButton.vue'

export default {
  name: 'Menu',
  components: {
    ListRouter,
    LangSwitch,
    GithubButton,
    ThemeButton
  },
  data () {
    return {}
  },
  computed: {
    menu: {
      get () { return this.$store.state.menu },
      set (newVal) { this.$store.dispatch('SET_MENU', newVal) }
    }
  }
}
</script>
