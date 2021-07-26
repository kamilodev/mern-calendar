import { fetchWithoutToken } from '../helpers/fetchWithoutToken'
import { fetchWithToken } from '../helpers/fetchWithToken'
import { types } from '../types/types'
import Swal from 'sweetalert2'

export const startLogin = (email, password) => {

	return async dispatch => {
		const resp = await fetchWithoutToken('auth', { email, password }, 'POST')
		const body = await resp.json()
		const error_msg = body.errors ? Object.values(body.errors)[0].msg : body.msg

		if (body.ok) {
			localStorage.setItem('token', body.token)
			localStorage.setItem('token-init-date', new Date().getTime())

			dispatch(
				login({
					uid: body.uid,
					name: body.name,
				}),
			)
		} else {
			Swal.fire('Error', error_msg, 'error')
		}
	}
}

export const startRegister = (name, email, password) => {
	return async dispatch => {
		const resp = await fetchWithoutToken('auth/new', { name, email, password }, 'POST')
		const body = await resp.json()
		const error_msg = body.errors ? Object.values(body.errors)[0].msg : body.msg
		if (body.ok) {
			localStorage.setItem('token', body.token)
			localStorage.setItem('token-init-date', new Date().getTime())

			dispatch(
				login({
					uid: body.uid,
					name: body.name,
				}),
			)
		} else {
			Swal.fire('Error', error_msg, 'error')
		}
	}
}

export const startChecking = () => {
	return async (dispatch) => {
		const resp = await fetchWithToken('auth/renew')
		const body = await resp.json()

		if (body.ok) {
			localStorage.setItem('token', body.token)
			localStorage.setItem('token-init-date', new Date().getTime())

			dispatch(
				login({
					uid: body.uid,
					name: body.name,
				}),
			)
		} else {
			dispatch(checkingFinish())
		}
	}
}

const checkingFinish = () => ({
	type: types.authCheckingFinish,
})

const login = user => ({
	type: types.authLogin,
	payload: user,
})
