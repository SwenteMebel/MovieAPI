<template>
   <div class="grid justify-center">
        
        <div class="p-2  bg-gray-200 md:w-[49rem] md:rounded-xl md:mt-10">
            <h1 class="text-xl font-bold text-center">Details from the movie, {{ movieData.Title }}</h1>
           <div class="grid md:flex  ">
                <div class="grid justify-center">
                    <img :src="movieData.Poster" :alt="movieData.Title" class="md:p-2 md:rounded-2xl md:mt-3">
                </div>
                <div class=" bg-slate-300 md:ml-5 md:mt-5 md:p-2 md:rounded-xl">
                    Title: {{ movieData.Title }}<br>
                    Writer: {{ movieData.Writer }}<br>
                    Released: {{ movieData.Released }}<br>
                    Genre: {{ movieData.Genre }}<br>
                    Language: {{ movieData.Language }}<br>
                    Run time: {{ movieData.Runtime }} <br>
                    Type: {{ movieData.Type }}<br>
                    Total Seasons: {{ movieData.totalSeasons }}<br>
                    Awards: {{ movieData.Awards }}<br>
                </div>
           </div> 
            <div class="bg-gray-500 flex md:my-2 md:p-2 md:rounded-xl text-white">
                About: {{ movieData.Plot }}
            </div>
            <div class="bg-gray-500 md:p-2 grid justify-start md:rounded-xl text-white font-semibold">
                <h1>ImdB</h1>
                Movie ID: {{ movieData.imdbID }}<br>
                Rating: {{ movieData.imdbRating }}<br>
                Votes: {{ movieData.imdbVotes }}
            </div>
        </div>
   </div>
</template>

<script>
export default {
    name: 'GetDetailMovie',

    created(){
        this.id = this.$route.params.id; 
        console.log('zoek ', this.id )
        this.movieData = this.$store.dispatch('GetMovie/getmovie', this.id)
    },

    computed:{
        movieData(){
            console.log( 'dit is de movie data' , this.$store.state.GetMovie.movies);
            return this.$store.state.GetMovie.movies;   
        },
        errorMsg(){
            return this.$store.state.GetMovie.error;
        },
        error(){
            return this.$store.state.GetMovie.error.length > 0;
        },
        loading(){
            return this.$store.state.GetMovie.loadingStatus;
        }
    }
}
</script>