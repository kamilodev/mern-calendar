import { types } from '../../types/types'

describe('Pruebas en types', () => {
	
	test('Los types deben ser iguales', () => {
		expect(types).toEqual({
			uiOpenModal: '[ui] Open Modal',
			uiCloseModal: '[ui] Close Modal',

			eventSetActive: '[event] Set Active',
			eventLogout: '[event] Logout',

			eventStartAddNew: '[event] Start Add New',
			eventAddNew: '[event] Add New',
			eventClearActiveEvent: '[event] Clear Active Event',
			eventUpdated: '[event] Event Updated',
			eventDeleted: '[event] Event Deleted',
			eventLoaded: '[event] Events loaded',

			authCheckingFinish: '[auth] Finish Checking Login State',
			authStartLogin: '[auth] Start Login',
			authLogin: '[auth] Login',
			authStartRegister: '[auth] Start Register',
			authStartStartTokenRenew: '[auth] Start Token Renew',
			authLogout: '[auth] Logout',
		})
	})
})