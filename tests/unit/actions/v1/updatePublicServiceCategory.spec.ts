import TestKit, { mockInstance } from '@kant2002-diia-inhouse/test'
import { PublicServiceCategoryCode } from '@kant2002-diia-inhouse/types'

import { PublicServiceCategoryStatus } from '@src/generated'

import UpdatePublicServiceCategoryAction from '@actions/v1/updatePublicServiceCategory'

import PublicServiceCategoriesService from '@services/publicCategories'

describe('UpdatePublicServiceCategoryAction', () => {
    const testKit = new TestKit()
    const publicServiceCategoriesServiceMock = mockInstance(PublicServiceCategoriesService)
    const updatePublicServiceCategoryAction = new UpdatePublicServiceCategoryAction(publicServiceCategoriesServiceMock)

    describe('method `handler`', () => {
        it('should successfully update public service category', async () => {
            const args = {
                headers: testKit.session.getHeaders(),
                params: {
                    category: PublicServiceCategoryCode.certificates,
                    icon: 'icon',
                    locales: {},
                    name: 'Name',
                    sortOrder: -1,
                    status: PublicServiceCategoryStatus.active,
                    tabCodes: [],
                },
                session: testKit.session.getPartnerSession(),
            }
            const { params: publicServiceCategory } = args

            jest.spyOn(publicServiceCategoriesServiceMock, 'updateCategory').mockResolvedValueOnce(publicServiceCategory)

            expect(await updatePublicServiceCategoryAction.handler(args)).toEqual(publicServiceCategory)

            expect(publicServiceCategoriesServiceMock.updateCategory).toHaveBeenCalledWith(publicServiceCategory)
        })
    })
})
