import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
  build: {
    transpile: [
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/free-solid-svg-icons",
    ],
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  runtimeConfig: {
    email: "czyang2002@gmail.com",
    pass: "",
  },
});
