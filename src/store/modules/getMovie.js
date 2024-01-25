import axios from 'axios'; 

const url = 'http://www.omdbapi.com/?apikey=9bb58dbf&i=';

export default({
    namespaced: true,

    state: {
       movies: '',
       loadingStatus: 'notloading',
       error: [],

    },

    mutations: {
        LOADING_STATUS(state, payload){
            state.loadingStatus = payload;
        },

        SET_MOVIE(state, payload){
            state.movies = payload; // komt in een search vanuit API en in een array 
        },
        CLEAR_MOVIES(state, payload){
            state.movies = payload;
        },

        SET_ERROR(state, payload){
            state.error = [...state.error, payload]
        }


    },

    actions:{
        getmovie(context, id){
            console.log('getmovie functie in store', id)
            context.commit('LOADING_STATUS', 'loading');

            axios.get(url + id)
                .then(result => {
                    context.commit('LOADING_STATUS', 'notloading');
                    context.commit('SET_MOVIE', result.data);
                })
                .catch( err =>{
                    context.commit('LOADING_STATUS', 'notloading');
                    context.commit('CLEAR_MOVIES', [] );
                    context.commit('SET_ERROR', err ); 
                })
        },
        verwijderen(context){
            console.log('verwijder functie in store')
            context.commit('CLEAR_MOVIES');
        }


    },
    modules: {
        
    },

    getters: {
    
    }

})