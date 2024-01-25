<template>
   
    <div class=" grid justify-center">
        <h1 class="grid justify-center text-[20px] font-serif font-semibold" >Zoek Films</h1>
        <input type="text" v-model="title" placeholder="Zoek voor film" class="bg-gray-400 p-2 shadow-md shadow-black focus:shadow-yellow-500 focus:bg-black focus:text-white text-serif rounded-xl w-[20rem]"> 
        <button @click="ophalen(title)" class="bg-gray-500 my-2 p-2 rounded-xl text-white  shadow-md shadow-black hover:shadow-green-500 ease-linear duration-500 w-[20rem]">Zoeken</button>
        <button @click="verwijder()" class="bg-gray-500 mb-2 p-2 rounded-xl text-white     shadow-md shadow-black hover:shadow-red-500 ease-linear duration-500  w-[20rem]">Reset</button>
        
        <div v-if="!loading" class="bg-yellow-500">Loading... Please wait...</div>
        <div v-if="error" class="bg-red-500">{{ errorMsg }}</div>
    </div>

  <div v-if="opgehaaldeMovies && opgehaaldeMovies.length >= 1" class="grid m-2">
        <div  v-for="movie in opgehaaldeMovies" :key="movie.imdbID" class="">
            <div class=" p-2 m-2 grid md:flex justify-center">
                <img @click="getmovieData(movie.imdbID)" :src="movie.Poster" alt="APIimg" class="rounded-t-xl md:rounded-l-xl md:rounded-r-none w-[20rem] shadow-xl shadow-gray-400 hover:shadow-black ease-linear duration-500">
                <div class="bg-gray-500 grid items-center p-2 rounded-b-xl md:rounded-r-xl md:rounded-l-none w-[20rem] shadow-xl shadow-gray-400 hover:shadow-black ease-linear duration-500">
                    Title:  {{ movie.Title }}<br>
                    Year:  {{ movie.Year }}<br>
                    Type:  {{ movie.Type }}<br>
                    imdb ID: {{ movie.imdbID }}<br>
                </div>
            </div>
        </div>
    </div>
    
    
</template>

<script>
export default {
    name: 'ApiMovieApp',
  

    methods:{
        ophalen(title){
            console.log('de film', title , 'ophalen')
            this.$store.dispatch('APIMovie/ophalenMovies', title);
        },

        verwijder(){
            console.log('klik op knop verwijderen')
            this.$store.dispatch('APIMovie/verwijderen');
        },
        getmovieData(movie){
            console.log('haal film id ', movie , ' op.');
            //this.$store.dispatch('getMovie/getmovie', movie);

            this.$router.push({
                name: 'detailmovie',
                params:{
                    id: movie,

                }
            })
        }

    },

    computed:{
        opgehaaldeMovies(){
            console.log(this.$store.state.APIMovie.movies)
            return this.$store.state.APIMovie.movies;
        },
        errorMsg(){
            return this.$store.state.APIMovie.error;
        },
        error(){
            return this.$store.state.APIMovie.error.length > 0; 
        },
        loading(){
            return this.$store.state.APIMovie.loadingStatus;
        },
        
    }

}
</script>