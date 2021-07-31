import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { CalendarScreen } from '../../calendar/CalendarScreen'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'

// jest.mock('../../actions/events', () => ({
// 	eventStartDelete: jest.fn(),
// }))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
	calendar: {
		events: [],
	},
	auth: {
		uid: '123',
		name: 'Kamilo',
	},
	ui: {
		openModal: false,
	},
}
const store = mockStore(initState)
store.dispatch = jest.fn()

const wrapper = mount(
	<Provider store={store}>
		<CalendarScreen />
	</Provider>,
)

describe('Test in <CalendarScreen />', () => {
	test('Should displayed correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})

	test('Test with interactions in calendar', () => {})
})
