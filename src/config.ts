import { BalancingStrategy, MetricsConfig, TransporterConfig } from '@kant2002-diia-inhouse/diia-app'

import { AppDbConfig, ReplicaSetNodeConfig } from '@kant2002-diia-inhouse/db'
import { EnvService } from '@kant2002-diia-inhouse/env'
import { HealthCheckConfig } from '@kant2002-diia-inhouse/healthcheck'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async (envService: EnvService) => ({
    isMoleculerEnabled: true,
    transporter: <TransporterConfig>{
        type: envService.getVar('TRANSPORT_TYPE'),
        options: envService.getVar('TRANSPORT_OPTIONS', 'object', {}),
    },

    balancing: <BalancingStrategy>{
        strategy: process.env.BALANCING_STRATEGY_NAME,
        strategyOptions: envService.getVar('BALANCING_STRATEGY_OPTIONS', 'object', {}),
    },

    healthCheck: <HealthCheckConfig>{
        isEnabled: process.env.HEALTH_CHECK_IS_ENABLED === 'true',
        port: process.env.HEALTH_CHECK_IS_PORT ? parseInt(process.env.HEALTH_CHECK_IS_PORT, 10) : 3000,
    },

    metrics: <MetricsConfig>{
        custom: {
            disabled: envService.getVar('METRICS_CUSTOM_DISABLED', 'boolean', false),
            port: envService.getVar('METRICS_CUSTOM_PORT', 'number', 3030),
            disableDefaultMetrics: envService.getVar('METRICS_CUSTOM_DISABLE_DEFAULT_METRICS', 'boolean', false),
            defaultLabels: envService.getVar('METRICS_CUSTOM_DEFAULT_LABELS', 'object', {}),
        },
    },

    grpc: {
        userServiceAddress: envService.getVar('GRPC_USER_SERVICE_ADDRESS'),
    },

    db: <AppDbConfig>{
        database: process.env.MONGO_DATABASE,
        replicaSet: process.env.MONGO_REPLICA_SET,
        user: process.env.MONGO_USER,
        password: process.env.MONGO_PASSWORD,
        authSource: process.env.MONGO_AUTH_SOURCE,
        port: envService.getVar('MONGO_PORT', 'number'),
        replicaSetNodes: envService
            .getVar('MONGO_HOSTS', 'string')
            .split(',')
            .map((replicaHost: string): ReplicaSetNodeConfig => ({ replicaHost })),
        readPreference: process.env.MONGO_READ_PREFERENCE,
        indexes: {
            sync: process.env.MONGO_INDEXES_SYNC === 'true',
            exitAfterSync: process.env.MONGO_INDEXES_EXIT_AFTER_SYNC === 'true',
        },
    },
})
