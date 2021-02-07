
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '株式会社OUTSENSE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'OUTSENSEは「折り」の技術で世の中に新しい価値を生み出す事業を行いながら宇宙居住施設の構築を目指す企業です。' },
      { 'http-equiv': "REFRESH", content: "5;URL=https://www.outsense.jp/"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  server: {
    port: 8000, // デフォルト: 3000
    host: '0.0.0.0' // デフォルト: localhost
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  // buildModules: [
  //   '@nuxtjs/google-analytics'
  // ],
  // googleAnalytics: {
  //   id: 'G-G1HWMYJWJG' //自身のアナリティクスコード
  // },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    ['@nuxtjs/google-analytics', { id: 'G-G1HWMYJWJG' }],
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
