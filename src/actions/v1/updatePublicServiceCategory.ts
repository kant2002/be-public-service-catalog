import { GrpcAppAction } from '@kant2002-diia-inhouse/diia-app'

import { ActionVersion, PublicServiceCategoryCode, SessionType } from '@kant2002-diia-inhouse/types'
import { ValidationSchema } from '@kant2002-diia-inhouse/validators'

import { PublicServiceCategory, PublicServiceCategoryStatus } from '@src/generated'

import PublicCategoriesService from '@services/publicCategories'

import { ActionResult, CustomActionArguments } from '@interfaces/actions/v1/updatePublicServiceCategory'

export default class UpdatePublicServiceCategoryAction implements GrpcAppAction {
    constructor(private readonly publicCategoriesService: PublicCategoriesService) {}

    readonly sessionType: SessionType = SessionType.Partner

    readonly actionVersion: ActionVersion = ActionVersion.V1

    readonly name: string = 'updatePublicServiceCategory'

    readonly validationRules: ValidationSchema = {
        category: { type: 'string', enum: Object.values(PublicServiceCategoryCode) },
        name: { type: 'string', optional: true },
        icon: { type: 'string', optional: true },
        status: { type: 'string', enum: Object.values(PublicServiceCategoryStatus), optional: true },
        sortOrder: { type: 'number', convert: true, optional: true },
        locales: { type: 'any', optional: true },
    }

    async handler(args: CustomActionArguments): Promise<ActionResult> {
        const { params: publicServiceCategory } = args

        return await this.publicCategoriesService.updateCategory(<Partial<PublicServiceCategory>>publicServiceCategory)
    }
}
