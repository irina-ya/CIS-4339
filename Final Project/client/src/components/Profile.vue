<template>
<div id="Profile">
  
    <hr>
    <label><b>Your Policies</b></label>
    <br><br>
    
    
    <ul v-for="(value, index) in sortedList" :key="index">
      <li v-for="(policy, index) in value.policies" :key="index" :value="policy">{{ policy }}</li>
    </ul><br><br>
    
    <hr>
    <form @submit.prevent="delAcct">
    <label><b>Delete Account?</b></label>
    <br><br>
    <label for="email"><b>E-mail</b></label>
    <input type="email" v-model="user.email" placeholder="Enter Your Email to Confirm" name="email" required><br>
    <button type="submit">Delete</button> 
    </form>
    <hr>
    
</div>

</template>

<script>
import axios from 'axios'
import userServices from '../userServices'
export default {
   name: 'Profile',
  
  data(){
      return {
         user:{
              username: this.$store.getters.getUsername,
              email: null
          },
        list: [],  
      }
      },
      
    created(){
    axios.get('http://localhost:3000/profile').then(res => {
      this.list = res.data
    })
    },
    //After all users are pulled filter based on active username
    computed:{
      sortedList: function(){
        return this.list.filter(user =>{
          return user.username === this.$store.getters.getUsername;
        })
      },
      
    },
    methods: {
      async delAcct(){
          userServices.delAcct(this.user)
    }
}}
</script>

<style scoped>
* {box-sizing: border-box}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

button {
  background-color: #af4c4c;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 10%;
}


/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Full-width inputs */
input[type=text],[type=email], input[type=password] {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
</style>

  