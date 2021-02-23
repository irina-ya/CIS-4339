import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        user:{
            token: null,
            username: null
        }
    },
    getters:{
        isValidUser: state =>{
            return(state.user.token) ? true: false
        },
        getUsername: state =>{
            return(state.user.username)
        }
    },
    mutations:{
        loginUser(state, {token, username}){
            state.user.token = token
            state.user.username = username
        },
        logoutUser(state){
            state.user.token = null
            state.user.username = null
        }
    }
})


