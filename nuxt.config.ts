// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/color-mode', '@nuxtjs/google-fonts', '@nuxtjs/tailwindcss', 'pruvious', '@element-plus/nuxt',],
  colorMode: {
    classSuffix: '',
  },
  googleFonts: {
    families: {
      Roboto: {
        wght: [400, 700],
        ital: [400, 700],
      },
      Montserrat: [800],
    },
  },
  pruvious: {
    jwt: {
      secretKey: 'random-secret-key',
    },
    standardCollections: {
      pages: false,
    },
  },
  runtimeConfig: {
    public: {
      showBanner: false,
    },
  },
  css: [
    '~/assets/styles/colormode.css',
    '~/assets/styles/styles.css',
    '~/assets/styles/fonts.css',
    '~/assets/styles/transitions.css'
  ],
})
