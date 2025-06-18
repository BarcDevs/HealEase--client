type Config = {
    serverUrl: string
    hostname: string
    serverApiVersion: string
    loginDuration: number

    replaysSessionSampleRate: number
    tinyMceApiKey: string
}

export const env = import.meta.env

const getEnv = (key: keyof typeof env): string => {
    const value = env[key]

    if (!value) {
        throw new Error(`Missing required environment variable: ${key}`)
    }

    return value
}

const config: Config = {
    serverUrl: env.VITE_SERVER_URL || 'localhost:4000',
    hostname: env.VITE_HOSTNAME || 'localhost:5173',
    serverApiVersion: env.VITE_SERVER_API_VERSION || 'v1',
    loginDuration: 7 * 24 * 60 * 60 * 1000, // 7 days

    replaysSessionSampleRate: (() => {
        const raw = env.VITE_SENTRY_REPLAYS_SESSION_SAMPLE_RATE
        const parsed = Number(raw)

        if (isNaN(parsed)) {
            throw new Error('VITE_SENTRY_REPLAYS_SESSION_SAMPLE_RATE must be a valid number')
        }

        return parsed
    })(),

    tinyMceApiKey: getEnv('VITE_TINY_MCE_API_KEY'),
}

export default config
