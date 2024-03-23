import TestKit, { mockInstance } from '@kant2002-diia-inhouse/test'
import { PublicServiceCode, SessionType } from '@kant2002-diia-inhouse/types'

import IsPublicServiceAvailableByCodeAction from '@actions/v1/isPublicServiceAvailableByCode'

import PublicServiceService from '@services/public'

describe('Action GetPublicServiceSettingsAction', () => {
    const service = mockInstance(PublicServiceService)
    const action = new IsPublicServiceAvailableByCodeAction(service)
    const testKit = new TestKit()

    const headers = testKit.session.getHeaders()
    const code = PublicServiceCode.criminalRecordCertificate

    it('should call extractProfileFeatures and publicCategoriesService', async () => {
        const isAvailable = true

        jest.spyOn(service, 'isPublicServiceAvailableByCode').mockResolvedValueOnce(isAvailable)

        await expect(
            action.handler({
                headers,
                params: {
                    sessionType: SessionType.User,
                    features: {},
                    code,
                },
            }),
        ).resolves.toEqual({
            isAvailable,
        })

        expect(service.isPublicServiceAvailableByCode).toHaveBeenCalledWith(code, SessionType.User, {}, headers)
    })
})
