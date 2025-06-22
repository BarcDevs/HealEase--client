import axios from 'axios'
import config from '@/config'
import {getCsrfTokenFromStore, refreshAuthData} from '@/handlers/auth'

export const api = axios.create({
    baseURL: `${config.serverUrl}/api/${config.serverApiVersion}`,
    withCredentials: true
})

api.interceptors.request.use(config => {
    const csrfToken = getCsrfTokenFromStore()

    if (
        csrfToken &&
        ['post', 'put', 'patch', 'delete']
            .includes((config.method || '').toLowerCase())
    ) {
        config.headers['x-csrf-token'] = csrfToken
    }

    return config
})

api.interceptors.response.use(undefined, async error => {
    const originalRequest = error.config

    const isCsrfError =
        error.response?.status === 403 &&
        error.response?.data?.message?.toLowerCase().includes('csrf')

    if (isCsrfError && !originalRequest._retry) {
        originalRequest._retry = true

        const refreshed = await refreshAuthData()

        if (refreshed)
            return api(originalRequest)
    }

    return Promise.reject(error)
})

