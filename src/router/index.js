import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/Home.vue'
import BandView from "@/views/BandView.vue";
import AlbumView from "@/views/AlbumView.vue";

const NotFoundView = () => import("@/views/NotFoundView.vue")

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            name:'home',
            component: HomeView
        },
        {
            path:'/:pathMatch(.*)*',
            name:'Page not found',
            component: NotFoundView
        },
        {
            path:'/bands/:id',
            name:'BandView',
            component:BandView
        },
        {
            path:'/albums/:id',
            name:'AlbumView',
            component: AlbumView
        }

    ]
})
export default router