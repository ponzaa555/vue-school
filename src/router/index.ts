import Home from "@/views/Home.vue"
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
// import path = require("path")


const routes : RouteRecordRaw[] = [
    {path:'/',name:'Home',component:Home},
    {
        path:'/destinations/:id/:slug' ,
        name: 'destination.show' , 
        component: () => import('@/views/DestinationShow.vue'),
        props: (route) => {
            const idParam = route.params.id
            const idStr = Array.isArray(idParam) ? idParam[0] : idParam
          
            return {
              ...route.params,
              id: idStr ? parseInt(idStr, 10) : null
            }
          },
        children:[
            {
                path:':experienceSlug',
                name:'experience.show',
                component: () => import('@/views/ExperienceShow.vue'),
                props: (route) => {
                    const idParam = route.params.id
                    const idStr = Array.isArray(idParam) ? idParam[0] : idParam

                    return {
                        ...route.params,
                        id: idStr ? parseInt(idStr, 10) : null
                    }
                }
            }
        ]
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
    linkActiveClass:'vue-school-active-link'
})

export default router