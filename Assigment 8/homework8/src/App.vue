<template>
  <div id="app">
    <Navbar />
    <img src="./assets/logo.png">
    <router-view/>

  </div>
</template>

<script>
import Navbar from './components/Navbar'
import AFCTeams from './components/AFCTeams'
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
     
    }
  },
  components: {
    Navbar,
    AFCTeams
  }
 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0px;
  background-color: whitesmoke;
}

img {
  width: 15%;
  height: 10%;
}
</style>
