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
    { path:'/', component:Home},
    { path:'/About', component:About},
    {path:'/Astrophoto', component: Astrophotography},
];
const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

/** ROUTER END */



const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
