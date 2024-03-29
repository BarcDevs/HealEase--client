type Config = {
    serverUrl: string
    hostname: string
    serverApiVersion: string
    loginDuration: number

    replaysSessionSampleRate: number
    tinyMceApiKey: string
}

const env = import.meta.env

const config: Config = {
    serverUrl: env.VITE_SERVER_URL,
    hostname: env.VITE_HOSTNAME,
    serverApiVersion: env.VITE_SERVER_API_VERSION || 'v1',
    loginDuration: 7 * 24 * 60 * 60 * 1000,

    replaysSessionSampleRate: Number(env.VITE_SENTRY_REPLAYS_SESSION_SAMPLE_RATE),
    tinyMceApiKey: env.VITE_TINY_MCE_API_KEY
}

export default config
