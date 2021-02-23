<template>
<div class="container">
        <form @submit.prevent="register">
        <hr>
        <label for="uname"><b>Username</b></label>
        <input type="text" v-model="user.username" placeholder="Enter Username" name="uname" required><br><br>

        <label for="email"><b>E-mail</b></label>
        <input type="email" v-model="user.email" placeholder="Enter Your Email" name="email" required><br><br>

        <label for="psw"><b>Password</b></label>
        <input type="password" v-model="user.password" placeholder="Enter Password" name="psw" required><br><br>

        <label for="psw2"><b>Confirm Password</b></label>
        <input type="password" placeholder="Confirm Password" name="psw2" required><br><br>

        <label for="fname"><b>First Name</b></label>
        <input type="text" v-model="user.firstName" placeholder="Enter Your First Name" name="fname" required><br><br>

        <label for="lname"><b>Last Name</b></label>
        <input type="text" v-model="user.lastName" placeholder="Enter Your Last Name" name="lname" required><br><br>
        <hr>

        <button type="submit">Register</button>      
        </form>

        <p v-if="status">{{status}}</p>

</div>

</template>

<script>
import userServices from '../userServices'
export default {
  name: 'Register',
  
  data(){
      return {
          user:{
              username: null,
              email: null,
              password: null,
              firstName: null,
              lastName: null
          },
        status: null
      }
  },
  methods:{
      async register(){
          try{
              const newUser = userServices.register(this.user).then(user => {
                
                if(Object.keys('newUser').includes('errors')){
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