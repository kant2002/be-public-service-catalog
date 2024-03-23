import { PartnerActionArguments } from '@kant2002-diia-inhouse/types'

import { PublicService, UpdatePublicServiceRequest } from '@src/generated'

export interface CustomActionArguments extends PartnerActionArguments {
    params: UpdatePublicServiceRequest
}

export type ActionResult = PublicService
