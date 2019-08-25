export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/favicon.png' }],
    script: [
      { src: 'https://kit.fontawesome.com/dbee1ad334.js' },
      { src: '/js/jquery.js' },
      { src: '/js/NchanSubscriber.js' },
      { src: '/js/nowplaying.js' },
      { src: '/js/player.js' },
      { src: '/js/bootstrap.min.js' },
      { src: '/js/jquery.fancybox.min.js' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/css/bootstrap.min.css', '~/css/jquery.fancybox.min.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],

  /*
   ** Manifest Option
   */
  manifest: {
    name: 'Rádio Afonso Santos',
    lang: 'pt'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
