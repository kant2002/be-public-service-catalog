import { PartnerActionArguments } from '@kant2002-diia-inhouse/types'

import { GetPublicServiceCategoriesListRequest, GetPublicServiceCategoriesListResponse } from '@src/generated'

export interface CustomActionArguments extends PartnerActionArguments {
    params: GetPublicServiceCategoriesListRequest
}

export type ActionResult = GetPublicServiceCategoriesListResponse
