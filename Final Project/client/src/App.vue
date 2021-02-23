<template>
  <div id="app">
    <Navbar />
    <img src="./assets/logo.jpg">
    
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Home from './components/Home'
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  components: {
    Navbar,
    Home
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

img{
  padding-top: 20px;
  height: 200px;
  width: 10%;
}
</style>
