import { createRouter, createWebHistory} from 'vue-router'

// components importeren
import Homepage from '@/components/HomePage.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Homepage,
    },

    {
        path: '/movies',
        name: 'apimovies',
        component: () => import(/*webPackChuckName: "APIMovies" */ '@/components/ApiMovie.vue')
    },
    {
        path: '/detailmovie/:id',
        name: 'detailmovie',
        component: () => import (/*webPackChuckName: "DetailsMovie"*/ '@/components/DetailMovie.vue')
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router;