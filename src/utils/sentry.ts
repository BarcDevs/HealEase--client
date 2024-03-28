import * as Sentry from '@sentry/react'
import {useEffect} from 'react'
import config from '@/config'

export const sentryInit = () => {
    Sentry.init({
        dsn: 'https://94ccf213e00340996348fa63f2605456@o4506954726703104.ingest.us.sentry.io/4506954741055488',
        integrations: [
            Sentry.browserTracingIntegration(),
            Sentry.metrics.metricsAggregatorIntegration(),
            // @ts-expect-error
            Sentry.reactRouterV6BrowserTracingIntegration({
                useEffect
            }),
            Sentry.replayIntegration({
                maskAllText: false,
                blockAllMedia: false
            })
        ],
        // Performance Monitoring
        tracesSampleRate: 1.0,
        tracePropagationTargets: [config.hostname, config.serverUrl + '/api/*'],
        // Session Replay
        replaysSessionSampleRate: config.replaysSessionSampleRate,
        replaysOnErrorSampleRate: 1.0
    })
}
