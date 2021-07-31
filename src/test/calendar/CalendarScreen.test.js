import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { CalendarScreen } from '../../calendar/CalendarScreen'
import { messages } from '../../helpers/calendar-messages'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'
import { types } from '../../types/types'
import { eventSetActive } from '../../actions/events'
import { act } from '@testing-library/react'

jest.mock('../../actions/events', () => ({
	eventSetActive: jest.fn(),
	eventStartLoading: jest.fn(),
}))

Storage.prototype.setItem = jest.fn()

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

	test('Evaluate interactions in Calendar', () => {
		const calendar = wrapper.find('Calendar')

		const calendarMessages = calendar.prop('messages')
		expect(calendarMessages).toEqual(messages)

		calendar.prop('onDoubleClickEvent')()
		expect(store.dispatch).toHaveBeenCalledWith({ type: types.uiOpenModal })

		calendar.prop('onSelectEvent')({ start: 'Hola' })
		expect(eventSetActive).toHaveBeenCalledWith({ start: 'Hola' })

		act(() => {
			calendar.prop('onView')('week')
			expect(localStorage.setItem).toHaveBeenCalledWith('lastView', 'week')
		})
	})
})
