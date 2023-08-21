<template>
  <div class="text-center ma-2">
    <v-btn :loading="loading" @click="requestGithub">
      Request github
    </v-btn>
    <p> Fullname : {{ fullname }} </p>
  </div>
</template>

<script>

export default {
  data: () => {
    return {
      fullname: '',
      loading: false
    }
  },
  methods: {
    sleep (waitTimeInMs) {
      return new Promise(resolve => setTimeout(resolve, waitTimeInMs))
    },
    async requestGithub () {
      let res
      try {
        this.$store.dispatch('snacks/info', this.$t('request.info'))
        this.loading = true

        await this.sleep(1000)

        res = await this.$github({
          method: 'GET',
          url: '/users/felixleo22'
        })
      } catch (err) {
        this.$store.dispatch('snacks/error', this.$t('request.error'))
      }

      this.loading = false

      if (res?.data?.name) {
        this.$store.dispatch('snacks/success', this.$t('request.success'))
      }

      this.fullname = res?.data?.name
    }
  }
}

</script>
