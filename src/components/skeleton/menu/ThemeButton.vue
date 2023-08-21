<template>
  <div class="pa-2 text-center">
    <v-tooltip top>
      <template #activator="{ on }">
        <v-btn
          small
          text
          icon
          v-on="on"
          @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        >
          <v-icon v-if="$vuetify.theme.dark">
            mdi-white-balance-sunny
          </v-icon>
          <v-icon v-else>
            mdi-weather-night
          </v-icon>
        </v-btn>
      </template>
      <span v-if="$vuetify.theme.dark">{{ $t("theme.dark") }}</span>
      <span v-else>{{ $t("theme.light") }}</span>
    </v-tooltip>
  </div>
</template>

<script>

</script>
