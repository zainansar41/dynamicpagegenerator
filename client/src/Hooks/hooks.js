import axios from 'axios';
axios.defaults.baseURL = "http://localhost:5000"

export async function registerUser(credentials) {
    try {
        const { data: { message, token }, status } = await axios.post('/api/register', credentials)
        return { message, status, token }
    }
    catch (error) {
        return error
    }
}

export async function loginUser(credentials){
    try {
        
        const {data:{message, token}, status} = await axios.post('/api/login', credentials)
        return {message, status, token}

    } catch (error) {
        return error
    }
}

export async function getNavbars(){
    try {
        const {data, status} = await axios.get('/api/navbars')
        return {data, status}
    } catch (error) {
        return error
    }
}