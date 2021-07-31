import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { AppRouter } from '../../router/AppRouter'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Test in <AppRouter />', () => {
	test('Should display correctly', () => {
		const initState = {
			auth: {
				checking: true,
			},
		}

		const store = mockStore(initState)
		const wrapper = mount(
			<Provider store={store}>
				<AppRouter />
			</Provider>,
		)

		expect(wrapper.find('h5').exists()).toBe(true)
	})

	test('Should display the private route', () => {
		const initState = {
			calendar: {
				events: [],
			},
			ui: {
				modalOpen: false,
			},
			auth: {
				checking: false,
				uid: 123,
				name: 'Kamilo',
			},
		}

		const store = mockStore(initState)
		const wrapper = mount(
			<Provider store={store}>
				<AppRouter />
			</Provider>,
		)

		expect(wrapper).toMatchSnapshot()
		expect(wrapper.find('.calendar__screen').exists()).toBe(true)
	})
})
