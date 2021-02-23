import axios from 'axios'

const url = 'http://localhost:3000/';

class userServices {
    static login(user){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.post(`${url}login`, {user})
                const data = res.data
                console.log(data)
                resolve(data)
            } catch (error){
                reject('Login is invalid!')
            }
        })
    }

    static register(user){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.post(`${url}register`, {user})                                          
                const data = res.data
                console.log(data)
                resolve(data)
            } catch (error){
                reject('Unable to register!')
            }
            })
    }
    
    static addpolicy(user){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.post(`${url}addPolicy`, {user}) 
                const data = res.data
                resolve(data)
            } catch (error){
                reject('Unable to update!')
            }
            })
        }
    
    static delAcct(user){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.post(`${url}delAcct`, {user}) 
                const data = res.data
                console.log(data)
                resolve(data)
            } catch (error){
                reject('Error!')
            }
            })
        }
    }
    

    


export default userServices;
