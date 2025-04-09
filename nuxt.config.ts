// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "./favicon.png"
        }
      ],
    },
  },
  nitro: {
    preset: 'aws-lambda',
    serveStatic: true,
  },
  runtimeConfig: {
    public: {
      imageBaseUrl: process.env.IMAGE_BASE_URL || '',
    },
  },
})
