import { createApp } from 'vue'
import { createRouter  , createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import router from './router'



createApp(App)
.use(router)
.mount('#app')
