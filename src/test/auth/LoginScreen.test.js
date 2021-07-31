import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { LoginScreen } from '../../auth/LoginScreen'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'
import { startLogin } from '../../actions/auth'

jest.mock('../../actions/auth', () => ({
	startLogin: jest.fn(),
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {}
const store = mockStore(initState)
store.dispatch = jest.fn()

const wrapper = mount(
	<Provider store={store}>
		<LoginScreen />
	</Provider>,
)

describe('Test in <LoginScreen />', () => {
	test('Should displayed correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})

	test('Should call dispatch of login', () => {
		wrapper.find('input[name="lEmail"]').simulate('change', {
			target: {
				name: 'lEmail',
				value: 'kamilo@gmail.com',
			},
		})

		wrapper.find('input[name="lPassword"]').simulate('change', {
			target: {
				name: 'lPassword',
				value: '123456',
			},
		})

		wrapper.find('form').at(0).prop('onSubmit')({
			preventDefault() {},
		})

		expect(startLogin).toHaveBeenCalledWith('kamilo@gmail.com', '123456')
	})
})
