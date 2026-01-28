import Home from "@/views/Home.vue"
// import path = require("path")
import { createRouter, createWebHistory } from "vue-router"
// import path = require("path")


const routes = [
    {path:'/',name:'Home',component:Home},
    {path:'/destinations/:id/:slug' ,name: 'destination.show' , component: () => import('@/views/DestinationShow.vue')}
]

const router = createRouter({
    history:createWebHistory(),
    routes,
    linkActiveClass:'vue-school-active-link'
})

export default router