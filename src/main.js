import './assets/main.css'

import { createApp } from 'vue'
import {createPinia } from 'pinia'

import App from './App.vue'

/** ROUTER BEGIN */
import {createMemoryHistory, createRouter } from 'vue-router'
import Home from "@/components/Pages/Home.vue";
import About from "@/components/Pages/About.vue"
import Astrophotography from "@/components/Pages/Astrophotography.vue";

const routes = [
    { path:'/', component:Home, meta:{title:"Weirmoon HOME"}},
    { path:'/About', component:About, meta:{title:"ABOUT WEIRMOON"}},
    {path:'/Astrophoto', component: Astrophotography, meta:{title:"Astro"}},
];
const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = (to.meta && to.meta.title)
        ? to.meta.title
        : "WEIRMOON";
    next();
});

/** ROUTER END */



const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
