import { createRouter, createWebHistory} from 'vue-router'

// components importeren
import Homepage from '@/components/HomePage.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Homepage,
    },

    {   // laadt deze pagina pas in als er in het menu op 'Movie' wordt geklikt 
        path: '/movies',
        name: 'apimovies',
        component: () => import(/*webPackChuckName: "APIMovies" */ '@/components/ApiMovie.vue')
    },
    {   // laadt deze pagina pas in als er op een film wordt geklikt. 
        path: '/detailmovie/:id',
        name: 'detailmovie',
        component: () => import (/*webPackChuckName: "DetailsMovie"*/ '@/components/DetailMovie.vue')
    }
]

// zorgt ervoor dat er geen # in de url balk komt. 
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router;