import axios from 'axios';

//creating backend config
const Api = axios.create({
    baseURL :"http://localhost:5000",
    withCredentials : true,
    headers :{
        "Content-Type": 'multipart/form-data'
    }
})

// Test API
export const testApi = ()=> Api.get('/test')

//register API
export const registerUserApi = (data)=> Api.post('/api/user/create',data)

//Login API
export const loginUserApi = (data) => Api.post('/api/user/login',data)

// create product API
export const createProductApi = (data) => Api.post('/api/product/create',data)

// http://localhost:5000/test

