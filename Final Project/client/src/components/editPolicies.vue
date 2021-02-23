<template>
<div id="editPolicies">
  <form @submit.prevent="addpolicy">
    <hr>
    <label for="addPolicy">Select Your Policy</label>
    <select v-model="user.policy">
      <option  v-for="(data, index) in list" :key="index" :value="data.policyName">{{ data.policyName }}</option>
    </select><br><br>
    <hr>
    <button type="submit">Add Policy</button> 
  </form>
   
</div>

</template>

<script>
import axios from 'axios'
import userServices from '../userServices'
export default {
   name: 'editPolicies',
  
  data(){
      return {
         user:{
              username: this.$store.getters.getUsername,
              policy: []
          },
        list: []
      }
      },
  created(){
    axios.get('http://localhost:3000/policies').then(res => {
      this.list = res.data
    })
    },  
  methods: {
      async addpolicy(){
          try{
              const addPolicy = userServices.addpolicy(this.user).then(user => {
                if(Object.keys('addPolicy').includes('errors')){
                    this.status = user.errors.message
                } else if (user.name == "MongoError"){
                    this.status = `${user.name} ${JSON.stringify(user.keyValue)}`
                }else{this.status = null}
                return user
              }).catch((error) => {
                  this.status = error
              })
          }catch(error){this.status = error}
      }
    }
}
</script>
<style scoped>
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}
</style>
  