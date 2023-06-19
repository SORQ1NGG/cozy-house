import {fileURLToPath, URL} from 'url';

export default defineNuxtConfig({
    modules: [
        'nuxt-swiper',
        '@nuxtjs/eslint-module'
    ],
    swiper: {
        modules: ['navigation']
    },
    css: ["~/assets/css/index.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                    @use 'sass:math';
                    @import "@/assets/css/variables-sass.scss";
                    @import "@/assets/css/mixins.scss";
                    @import "@/assets/css/functions.scss";
                `
                }
            }
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    head: {
        title: 'Cozy House',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {
                as: 'style',
                rel: 'stylesheet preload prefetch',
                href: '/fonts/fonts.scss'
            }
        ]
    }
})
