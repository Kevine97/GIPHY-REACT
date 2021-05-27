import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs/'
})

export default clienteAxios
