import axios from 'axios'

const HTTP = axios.create({
    baseURL: 'https://api.tvmaze.com'
})

export default HTTP