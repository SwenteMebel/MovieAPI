<template>
  <Headervue title="Movie App" subtitle="find your movie" />

  <router-view /> <!--BELANGRIJK!! ANDERS ZIE JE JE ROUTES NIET!-->
</template>


<script>
import Headervue from './components/Header.vue';

export default {
  name: 'App',
    
  components: {
      Headervue,
  }
}

</script>