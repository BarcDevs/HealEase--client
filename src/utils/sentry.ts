import * as Sentry from '@sentry/react'
import {useEffect} from 'react'
import config from '@/config'

export const sentryInit = () => {
    Sentry.init({
        dsn: config.sentryDsn,
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
