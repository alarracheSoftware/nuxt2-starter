<template>
  <section>
    <p
      class="text-center ma-2"
      v-html="$t('link', { githubProfileURL: $config.githubProfileURL })"
    />
    <GithubButtonRequest />
  </section>
</template>

<script>
import GithubButtonRequest from '@/components/home/GithubButtonRequest.vue'

export default {
  name: 'Home',
  components: {
    GithubButtonRequest
  },
  transition: 'slide-x-transition'
}
</script>
