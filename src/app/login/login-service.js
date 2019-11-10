const axios = require('axios'); 

export default class LoginServices {

    login = async function login (credientials ){ 
        return axios.post('/login', {
            email:credientials.email,
            password: credientials.password
        }) 
    }
}