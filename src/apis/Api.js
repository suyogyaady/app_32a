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

// get all products API
export const getAllProductsApi = () => Api.get('/api/product/get_all_products')

// get all single products API
export const getSingleProductApi = (id) => Api.get(`/api/product/get_single_products/${id}`)

// delete product API
export const deleteProduct = (id) => Api.delete(`/api/product/delete_product/${id}`)

// update product API
export const updateProduct = (id, data) => Api.put(`/api/product/update_product/${id}`,data)


// http://localhost:5000/test

