<template>
  <div id="AFCTeams" class="teams" v-show=!isHidden>
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

          <tbody v-for="(data, index) in teams" :key="index">
            <tr>
              <td>{{ data.division }}</td>
              <td>{{ data.name }}</td>
              <td>{{ data.wins }}</td>
              <td>{{ data.loses }}</td>
              <td>{{ data.ties }}</td>
            </tr>
          </tbody>

        </table>
        

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AFCTeams',
  data () {
    return {
        teams: [],
    }
  },
  created(){
    axios.get('http://localhost:3000/').then(res => {
      this.teams = res.data
    })
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

</style>

