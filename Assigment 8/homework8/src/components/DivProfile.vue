<template>
  <div id="DivProfile" class="teams">
    <div>
        <table>
          <thead>
          <tr>
            <th>Divison</th>
            <th>Team Name</th>
            <th>Wins</th>
            <th>Loses</th>
            <th>Ties</th>
          </tr>
          </thead>

          <tbody v-for="(data, index) in sortedDiv" :key="index">
            <td>{{ data.division }}</td>
            <td>{{ data.name }}</td>
            <td>{{ data.wins }}</td>
            <td>{{ data.loses }}</td>
            <td>{{ data.ties }}</td>
          </tbody>

        </table>
        

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DivProfile',
  data () {
    return {
        teams: [],
    }
  },
  created(){
    axios.get('http://localhost:3000/').then(res => {
      this.teams = res.data
    })
    },
    watch:{
      $route: 'getDiv'
    },
    //Computed function to filter the original data by the chosen division 
    computed:{
      sortedDiv: function(){
        return this.teams.filter(div =>{
          return div.division === this.$route.params.divName;
        })
      }
    }
}
</script>

<style scoped>
.teams{
  padding-top: 10px;
  display: flex;
  justify-content: center;
}

table, th, td {
    align-self: center;
    border-bottom: 1px solid black;
    border-collapse: collapse;
    text-align: center;
    padding: 5px;
  }

thead {
    background-color: rgb(189, 75, 75);
}

tr:nth-child(even) {background-color: #8e9fa7;}
</style>