import axios from 'axios'

export default (ctx, inject) => {
  const github = axios.create({
    baseURL: ctx.$config.APIHost,
    timeout: 3000
  })

  inject('github', github)
}
