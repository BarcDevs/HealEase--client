type Config = {
    serverUrl: string
}

const config: Config = {
    serverUrl: import.meta.env.VITE_SERVER_URL
}

export default config
