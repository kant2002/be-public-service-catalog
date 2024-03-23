import { PartnerActionArguments } from '@kant2002-diia-inhouse/types'

import { PublicServiceCategory } from '@src/generated'

export interface CustomActionArguments extends PartnerActionArguments {
    params: PublicServiceCategory
}

export type ActionResult = PublicServiceCategory
