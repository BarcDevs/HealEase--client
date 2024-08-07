import axios from 'axios'
import config from '@/config'

export const api = axios.create({
    baseURL: `${config.serverUrl}/api/${config.serverApiVersion}`,
    withCredentials: true
})
