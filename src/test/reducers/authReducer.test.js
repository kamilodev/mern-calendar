import { authReducer } from '../../reducers/authReducer'
import { types } from '../../types/types'

const initState = {
	checking: true,
}

describe('Test in authReducer', () => {
	test('Should return default state', () => {
		const action = {}
		const state = authReducer(initState, action)

		expect(state).toEqual(initState)
	})

	test('Sould to authenticate user', () => {
		const action = {
			type: types.authLogin,
			payload: {
				uid: '12345',
				name: 'Kamilo Vanegas',
			},
		}

		const state = authReducer(initState, action)
		expect(state).toEqual({ checking: false, uid: '12345', name: 'Kamilo Vanegas' })
	})
})
