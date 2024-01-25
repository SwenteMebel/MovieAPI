import { createStore } from 'vuex'

// Import andere kleinere stores om ze hier samen te voegen en naar de page te sturen
import APIMovie from '@/store/modules/APIMovie'
import GetMovie from '@/store/modules/getMovie'

export default createStore ({
    state: {
       
    },

    mutations: {

    
    },

    actions:{
   
    },
    modules: {
        APIMovie, // API store ovies
        GetMovie, // Get movie data after click
    },

    getters: {
    
    }

});