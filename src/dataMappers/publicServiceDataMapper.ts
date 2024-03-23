import { FlattenMaps, Types } from 'mongoose'

import { PublicServiceSettings } from '@kant2002-diia-inhouse/types'

import { PublicService } from '@src/generated'

export default class PublicServiceDataMapper {
    toEntity(
        model: FlattenMaps<PublicService> & {
            _id: Types.ObjectId
        },
    ): PublicServiceSettings {
        const {
            _id: id,
            categories,
            code,
            name,
            status,
            segments,
            contextMenu,
            appVersions,
            platformMinVersion,
            sessionTypes,
            sortOrder,
            locales,
            profileFeature,
        } = model

        return {
            id: id.toString(),
            categories,
            code,
            name,
            status,
            segments,
            contextMenu,
            appVersions,
            platformMinVersion,
            sessionTypes,
            sortOrder,
            locales,
            profileFeature,
        }
    }
}
