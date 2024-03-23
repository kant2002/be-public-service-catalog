import { GrpcAppAction } from '@kant2002-diia-inhouse/diia-app'

import { ActionVersion, SessionType } from '@kant2002-diia-inhouse/types'
import { ValidationSchema, getListValidationSchema } from '@kant2002-diia-inhouse/validators'

import PublicCategoriesService from '@services/publicCategories'

import { ActionResult, CustomActionArguments } from '@interfaces/actions/v1/getPublicServiceCategoriesList'

export default class GetPublicServiceCategoriesAction implements GrpcAppAction {
    constructor(private readonly publicCategoriesService: PublicCategoriesService) {}

    readonly sessionType: SessionType = SessionType.Partner

    readonly actionVersion: ActionVersion = ActionVersion.V1

    readonly name: string = 'getPublicServiceCategoriesList'

    readonly validationRules: ValidationSchema<CustomActionArguments['params']> = getListValidationSchema()

    async handler(args: CustomActionArguments): Promise<ActionResult> {
        const {
            params: { skip = 0, limit = 100 },
        } = args

        return await this.publicCategoriesService.getPublicServiceCategoriesList({ skip, limit })
    }
}
