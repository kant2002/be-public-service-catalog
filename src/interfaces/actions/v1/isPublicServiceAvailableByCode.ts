import { ServiceActionArguments } from '@kant2002-diia-inhouse/types'

import { IsPublicServiceAvailableRequest, IsPublicServiceAvailableResponse } from '@src/generated'

export interface CustomActionArguments extends ServiceActionArguments {
    params: IsPublicServiceAvailableRequest
}

export type ActionResult = IsPublicServiceAvailableResponse
