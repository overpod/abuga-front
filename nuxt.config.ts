// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/scss/index.scss"],
  modules: ["@element-plus/nuxt", "@nuxtjs/color-mode"],
  // plugins: ['~/plugins/urql'],
  elementPlus: {
    imports: ["useLocale"],
    themes: ["dark"],
  },
  colorMode: {
    preference: "dark",
    fallback: "dark",
    classSuffix: "",
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
    },
  },
});
