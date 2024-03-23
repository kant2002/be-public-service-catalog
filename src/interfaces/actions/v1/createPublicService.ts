import { PartnerActionArguments } from '@kant2002-diia-inhouse/types'

import { PublicService } from '@src/generated'

export interface CustomActionArguments extends PartnerActionArguments {
    params: PublicService
}

export type ActionResult = PublicService
