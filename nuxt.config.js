export default {
  srcDir: 'src/',
  ssr: false,
  target: 'static',
  head: {
    title: 'nuxt-template-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  axios: {},
  pwa: {
    manifest: {
      lang: 'ja',
    },
  },
  build: {},
}
