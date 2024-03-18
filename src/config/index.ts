type Config = {
    serverUrl: string
}

const env = import.meta.env

const config: Config = {
    serverUrl: env.VITE_SERVER_URL
}

export default config
