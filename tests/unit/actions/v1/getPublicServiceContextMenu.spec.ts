import TestKit, { mockInstance } from '@kant2002-diia-inhouse/test'
import { PublicServiceCode } from '@kant2002-diia-inhouse/types'

import GetPublicServiceContextMenuAction from '@actions/v1/getPublicServiceContextMenu'

import PublicServiceService from '@services/public'

describe('GetPublicServiceContextMenuAction', () => {
    const testKit = new TestKit()
    const publicServiceServiceMock = mockInstance(PublicServiceService)
    const getPublicServiceContextMenuAction = new GetPublicServiceContextMenuAction(publicServiceServiceMock)

    describe('method `handler`', () => {
        it('should successfully get public service context menu', async () => {
            const code = PublicServiceCode.criminalRecordCertificate
            const args = {
                params: { code },
                headers: testKit.session.getHeaders(),
                session: testKit.session.getPartnerSession(),
            }

            jest.spyOn(publicServiceServiceMock, 'getPublicServiceContextMenu').mockResolvedValueOnce([])

            expect(await getPublicServiceContextMenuAction.handler(args)).toEqual({ contextMenu: [] })

            expect(publicServiceServiceMock.getPublicServiceContextMenu).toHaveBeenCalledWith(code)
        })
    })
})
