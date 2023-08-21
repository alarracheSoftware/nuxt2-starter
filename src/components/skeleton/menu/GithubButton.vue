<template>
  <div class="pa-2 text-center">
    <v-btn
      small
      class="ma-3"
      :href="$config.githubProfileURL"
      target="_blank"
      rel="noreferrer"
      outlined
    >
      Version: {{ $config.version }}
      <v-icon right>
        mdi-github
      </v-icon>
    </v-btn>
  </div>
</template>
<script>

</script>
