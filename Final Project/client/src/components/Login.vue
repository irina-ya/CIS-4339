<template>

<form @submit.prevent="login">
    <div class="container">
        <hr>
        <label for="uname"><b>Username</b></label>
        <input type="text" v-model="user.username" placeholder="Enter Username" required><br><br>

        <label for="psw"><b>Password</b></label>
        <input type="password" v-model="user.password" placeholder="Enter Password" required><br><br>
        <hr>

        <button type="submit">Login</button>    

        <p v-if="status">{{status}}</p>  
  </div>
</form>
</template>

<script>
import userServices from '../userServices'
export default {
  name: 'Login',
  
  data(){
      return {
          user:{
              username: null,
              password: null
          },
        status: null
      }
  },
  methods:{
      async login(){
          try{
              const userFound = userServices.login(this.user).then(user => {
                
                this.storeToken(user.token, user.foundUser.username)
                return user
              }).catch((error) => {
                  this.status = error
              })
          }catch(error){this.status = error}
      },
      storeToken(token, username){
        this.$store.commit('loginUser',{token, username})
      }
      
    
  }
  }
  

</script>


<style scoped>
/* Set a style for all buttons */

* {box-sizing: border-box}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

button {
  background-color: #af4c4c;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 25%;
}

label {
    display: inline-block;
    width:200px;
    text-align: right;
    font-family: Verdana;
    font-size: small;
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

.container {
  padding: 16px;
}
</style>

