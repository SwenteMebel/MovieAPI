<template>
    <div class="bg-black text-gray-100 shadow-md hover:shadow-xl hover:shadow-gray-500 ease-linear duration-150 py-3.5 px-6 showd md:flex justify-between items-center ">
      <div class="flex items-center">
        <img alt="Vue logo" src="../assets/netflix.jpg" class="w-16 h-15 bg-gray-900">
        <h1 class="text-xl font-black self-center">{{ title }}</h1>
        <p class="text-md font-light self-center px-2 ">{{ subtitle }}</p>
      </div>
  
      <span  class="absolute md:hidden right-6 top-5 text-4xl cursor-pointer ">
        <div class="w-10 h-1 bg-white mt-0.5 mr-2" @click="openMenu()" :class="[open ? 'bi bi-x' : 'bi bi-filet-left']"></div>
        <div class="w-10 h-1 bg-white mt-0.5 mr-2" @click="openMenu()" :class="[open ? 'bi bi-x' : 'bi bi-filet-left']"></div>
        <div class="w-10 h-1 bg-white mt-0.5 mr-2" @click="openMenu()" :class="[open ? 'bi bi-x' : 'bi bi-filet-left']"></div>
      </span>
  
      <ul class="md:flex md:items-center md:static bg-gray-900 absolute md:w-auto hover:md-px-5 text-semibold w-full top-30 duration-500 ease-out rounded-lg hover:bg-gray-500" :class="[open ? 'left-0' : 'left-[-100%]']">
        <li class="md:mx-4 md:my-0 p-1 mx-2 text-xl font-serif hover:text-green-500"><router-link to="/">Home</router-link></li>
        <li class="md:mx-4 md:my-0 p-1 mx-2 text-xl font-serif hover:text-green-500"><router-link to="/movies">Movie</router-link></li>
      </ul>
    </div>
    
  </template>
    
  <script>
    export default {
      name: 'headerVue',
      props: {
        title: String, 
        subtitle: String
      },
  
   data(){
      return{
        open: false,
      }
   },
  
   methods:{
      openMenu(){
          this.open = !this.open;
      }
   }
     
    }
  </script>