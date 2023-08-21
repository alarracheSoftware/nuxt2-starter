<template>
  <v-list-group no-action append-icon="mdi-chevron-down" prepend-icon="mdi-translate">
    <template #activator>
      <v-list-item-title class="body-2" v-text="$t('language')" />
    </template>

    <v-list-item
      v-for="locale in $i18n.locales"
      :key="locale.code"
      @click="$i18n.setLocale(locale.code)"
    >
      <v-list-item-title class="body-2" v-text="locale.name" />
      <v-list-item-icon>
        <img width="24" :src="require(`@/static/img/${locale.code}.png`)">
      </v-list-item-icon>
    </v-list-item>
  </v-list-group>
</template>

<script>
export default {
  name: 'LangSwitch'
}
</script>
