<template>
    <div id="Navbar" class="topnav">
      
        <router-link class="left_button" to="/"> Home </router-link>
        <router-link class="left_button" to="/faq"> FAQ </router-link>
        <router-link class="left_button" to="/viewPolicies"> View Our Policies </router-link>
        

        <router-link v-if="!userToken" class="user_action" to="/register"> Register </router-link>
        <router-link v-if="!userToken" class="user_action" to="/login"> Log In </router-link>

        <router-link v-if="userToken" class="user_action" v-on:click.native="logout()" to="/" > Log Out </router-link>
        <router-link v-if="userToken" class="user_action" to="/editPolicies"> Add Policies </router-link>
        <router-link v-if="userToken" class="user_action" :to= "{name: 'Profile'}"> Your Profile </router-link>
        


    </div>

</template>
<script>

export default {
    name: 'Navbar',
    data(){
      return{};
    },
    computed: {
      userToken(){
        return this.$store.getters.isValidUser
      }, 
    },
    methods: {
      logout(){
        this.$store.commit('logoutUser')
      }
    }
}
</script>

<style>
/* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.user_action{
    float: right;
}

.left_button{
    float: left;
}

</style>