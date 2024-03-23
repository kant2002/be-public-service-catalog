import { asClass, asFunction, asValue } from 'awilix'

import { DepsFactoryFn, DepsResolver, GrpcClientFactory, GrpcService } from '@kant2002-diia-inhouse/diia-app'

import { AnalyticsService } from '@kant2002-diia-inhouse/analytics'
import { DatabaseService, DbType } from '@kant2002-diia-inhouse/db'
import DiiaLogger from '@kant2002-diia-inhouse/diia-logger'
import { HealthCheck } from '@kant2002-diia-inhouse/healthcheck'
import { UserServiceDefinition } from '@kant2002-diia-inhouse/user-service-client'

import Utils from './utils'

import { AppDeps, GrpcClientsDeps, GrpcServiceName } from '@interfaces/application'
import { AppConfig } from '@interfaces/config'

export default (config: AppConfig): ReturnType<DepsFactoryFn<AppConfig, AppDeps>> => {
    const { healthCheck, db } = config

    const grpcClientsDeps: DepsResolver<GrpcClientsDeps> = {
        userServiceClient: asFunction((grpcClientFactory: GrpcClientFactory) =>
            grpcClientFactory.createGrpcClient(UserServiceDefinition, config.grpc.userServiceAddress, GrpcServiceName.User),
        ).singleton(),
    }

    return {
        config: asValue(config),
        logger: asClass(DiiaLogger, { injector: () => ({ options: { logLevel: process.env.LOG_LEVEL } }) }).singleton(),
        healthCheck: asClass(HealthCheck, { injector: (c) => ({ container: c.cradle, healthCheckConfig: healthCheck }) }).singleton(),
        database: asClass(DatabaseService, { injector: () => ({ dbConfigs: { [DbType.Main]: db } }) }).singleton(),
        analytics: asClass(AnalyticsService).singleton(),
        redlock: asValue(null),
        grpcService: asClass(GrpcService, { injector: (c) => ({ container: c }) }).singleton(),
        utils: asClass(Utils).singleton(),

        ...grpcClientsDeps,
    }
}
