import { PartnerActionArguments, PublicServiceSettings } from '@kant2002-diia-inhouse/types'

import { GetPublicServiceByCodeRequest } from '@src/generated'

export interface CustomActionArguments extends PartnerActionArguments {
    params: GetPublicServiceByCodeRequest
}

export type ActionResult = PublicServiceSettings
