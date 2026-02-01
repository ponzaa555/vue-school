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
        path:'/protected',
        name:'protected',
        component: () => import('@/views/Protected.vue'),
        meta:{
            requiresAuth:true,
        }
    },
    {
        path:'/:pathMatch(.*)*',
        name:'NotFound',
        component:() => import('@/views/NotFound.vue')
    },
    {
        path:'/login',
        name:'login',
        component: () => import('@/views/Login.vue')
    },
    {
        path:'/invoices',
        name:'invoices',
        component:() => import('@/views/Invoices.vue'),
        meta:{
            requiresAuth:true
        }
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

// gobal navigation guard
router.beforeEach((to ,from) =>{
    if(to.meta.requiresAuth && !window.user){
        // need to login if not already logged in 
        return {name:'login' ,query:{redirect:to.fullPath}}
    }
})
export default router