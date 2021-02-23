<template>
    <div id="Navbar" class="topnav">
      <ul>
        <li>
        <router-link tag="li" to="/"> Home </router-link>
        </li>
      </ul>
      
      <ul v-for="(data, index) in divs" :key="index">
      <li>
        <router-link tag="li" :to = "{name: 'DivProfile', params: {divName: data.division} }">
          {{ data.division }} </router-link>
      </li>
      </ul>
     
    </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'Navbar',
    data () {
    return {
        teams: [],

        //Hardcoded the divisions in, as looping through the data caused repeating links
        divs: [
          { division: "AFC East" },
          { division: "AFC West" },
          { division: "AFC North" },
          { division: "AFC South" }
        ]
    }
  },
  created(){
    axios.get('http://localhost:3000/').then(res => {
      this.teams = res.data
    })
    },
  } 
</script>

<style>
.topnav {
    background-color: brown;
    overflow: hidden;
  }

.topnav ul, li {
  display: inline;
  float: left;
  color: #f2f2f2;
  text-align: center;
  text-decoration: none;
  font-size: 17px;
}
 .topnav li:hover {
    background-color: #ddd;
    color: black;
  }

</style>