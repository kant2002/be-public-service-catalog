import { GrpcAppAction } from '@kant2002-diia-inhouse/diia-app'

import { ActionVersion, PublicServiceCategoryCode, SessionType } from '@kant2002-diia-inhouse/types'
import { ValidationSchema } from '@kant2002-diia-inhouse/validators'

import PublicCategoriesService from '@services/publicCategories'

import { ActionResult, CustomActionArguments } from '@interfaces/actions/v1/getPublicServiceCategoryByCategory'

export default class GetPublicServiceCategoryByCategoryAction implements GrpcAppAction {
    constructor(private readonly publicCategoriesService: PublicCategoriesService) {}

    readonly sessionType: SessionType = SessionType.Partner

    readonly actionVersion: ActionVersion = ActionVersion.V1

    readonly name: string = 'getPublicServiceCategoryByCategory'

    readonly validationRules: ValidationSchema = {
        category: { type: 'string', enum: Object.values(PublicServiceCategoryCode) },
    }

    async handler(args: CustomActionArguments): Promise<ActionResult> {
        const {
            params: { category },
        } = args

        return await this.publicCategoriesService.getPublicServiceCategoryByCategory(category)
    }
}
