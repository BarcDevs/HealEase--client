type Config = {
    serverUrl: string
    tinyMceApiKey: string
}

const env = import.meta.env

const config: Config = {
    serverUrl: env.VITE_SERVER_URL,
    tinyMceApiKey: env.VITE_TINY_MCE_API_KEY
}

export default config
