type Config = {
    serverUrl: string
    hostname: string
    replaysSessionSampleRate: number
    tinyMceApiKey: string
}

const env = import.meta.env

const config: Config = {
    serverUrl: env.VITE_SERVER_URL,
    hostname: env.VITE_HOSTNAME,
    replaysSessionSampleRate: Number(env.VITE_SENTRY_REPLAYS_SESSION_SAMPLE_RATE),
    tinyMceApiKey: env.VITE_TINY_MCE_API_KEY
}

export default config
