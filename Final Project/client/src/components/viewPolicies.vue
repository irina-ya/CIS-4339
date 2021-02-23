<template>
  <div id="viewPolicies" class="policies">
    <div>
        <table>
          <thead>
          <tr>
            <th>Policy Name</th>
            <th>Cost</th>
            <th>Who's Covered</th>
            <th>Included in Coverage</th>
          </tr>
          </thead>

          <tbody v-for="(data, index) in policies" :key="index">
            <tr>
              <td>{{ data.policyName }}</td>
              <td>{{ data.costPerMonth }}</td>
              <td>{{ data.coveredIndividuals }}</td>
              <td>{{ data.includedServices }}</td>
            </tr>
          </tbody>

        </table>
        

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'viewPolicies',
  data () {
    return {
        policies: [],
    }
  },
  created(){
    axios.get('http://localhost:3000/policies').then(res => {
      this.policies = res.data
    })
    } 
}
</script>

<style scoped>
.policies{
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
