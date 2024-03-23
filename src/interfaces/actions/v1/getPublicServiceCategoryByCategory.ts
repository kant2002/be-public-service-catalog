import { PartnerActionArguments } from '@kant2002-diia-inhouse/types'

import { GetPublicServiceCategoryByCategoryRequest, PublicServiceCategoryResult } from '@src/generated'

export interface CustomActionArguments extends PartnerActionArguments {
    params: GetPublicServiceCategoryByCategoryRequest
}

export type ActionResult = PublicServiceCategoryResult
