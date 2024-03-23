import { GrpcService } from '@kant2002-diia-inhouse/diia-app'

import { AnalyticsService } from '@kant2002-diia-inhouse/analytics'
import { DatabaseService } from '@kant2002-diia-inhouse/db'
import { HealthCheck } from '@kant2002-diia-inhouse/healthcheck'
import { UserServiceClient } from '@kant2002-diia-inhouse/user-service-client'

import Utils from '@src/utils'

import { AppConfig } from '@interfaces/config'

export interface GrpcClientsDeps {
    userServiceClient: UserServiceClient
}

export type AppDeps = {
    config: AppConfig
    healthCheck: HealthCheck
    database: DatabaseService
    analytics: AnalyticsService
    grpcService: GrpcService
    redlock: null
    utils: Utils
} & GrpcClientsDeps

export enum GrpcServiceName {
    User = 'User',
}
