import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8997'
})

export default api