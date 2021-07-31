import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import '@testing-library/jest-dom'

import { startRegister, startChecking } from '../../actions/auth'
import { types } from '../../types/types'
import * as fetchModule from '../../helpers/fetchWithToken'
import * as fetchModule2 from '../../helpers/fetchWithoutToken'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {}
let store = mockStore(initState)

Storage.prototype.setItem = jest.fn()

let token = ''

describe('Test in actions Auth', () => {
	beforeEach(() => {
		store = mockStore(initState)
		jest.clearAllMocks()
	})

	test('startRegister works', async () => {
		fetchModule2.fetchWithoutToken = jest.fn(() => ({
			json() {
				return {
					ok: true,
					uid: '12345',
					name: 'Camilo',
					token: 'ABC123ABC123',
				}
			},
		}))

		await store.dispatch(startRegister('test2@test.com', '123456', 'test'))

		const actions = store.getActions()

		expect(actions[0]).toEqual({
			type: types.authLogin,
			payload: {
				uid: '12345',
				name: 'Camilo',
			},
		})

		expect(localStorage.setItem).toHaveBeenCalledWith('token', 'ABC123ABC123')
		expect(localStorage.setItem).toHaveBeenCalledWith('token-init-date', expect.any(Number))
	})

	test('startChecking correct', async () => {
		fetchModule.fetchWithToken = jest.fn(() => ({
			json() {
				return {
					ok: true,
					uid: '12345',
					name: 'Camilo',
					token: 'ABC123ABC123',
				}
			},
		}))

		await store.dispatch(startChecking())

		const actions = store.getActions()

		expect(actions[0]).toEqual({
			type: types.authLogin,
			payload: {
				uid: '12345',
				name: 'Camilo',
			},
		})

		expect(localStorage.setItem).toHaveBeenCalledWith('token', 'ABC123ABC123')
	})
})
