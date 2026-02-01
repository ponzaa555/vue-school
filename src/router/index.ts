import Home from "@/views/Home.vue"
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import sourceData from '@/data.json'
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
        beforeEnter:(to,from) => {
            const exits = sourceData.destinations.find(
                des => (des.id === parseInt(to.params.id as string) && des.slug === to.params.slug )
            )

            if(!exits) return {
                name:'NotFound',
                params:{pathMatch: to.path.split('/').slice(1)},
                query:to.query,
                hash:to.hash
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
    },
    {
        path:'/:pathMatch(.*)*',
        name:'NotFound',
        component:() => import('@/views/NotFound.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
    linkActiveClass:'vue-school-active-link',
    scrollBehavior (to, from, savedPosition) {
        // return desired position
        return savedPosition || new Promise((resolve) => {
            setTimeout(() => resolve({top:0,behavior:'smooth'}),1000)
        })
      }
})

export default router