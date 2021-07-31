import React from 'react'
import { CalendarModal } from '../../calendar/CalendarModal'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'
import moment from 'moment'
import { eventStartUpdate, eventClearActiveEvent } from '../../actions/events'

jest.mock('../../actions/events', () => ({
	eventStartUpdate: jest.fn(),
	eventClearActiveEvent: jest.fn(),
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const now = moment().minutes(0).seconds(0).add(1, 'hours')
const nowPlus1 = now.clone().add(1, 'hours')

const initState = {
	calendar: {
		events: [],
		activeEvent: {
			title: 'Hola Mundo',
			notes: 'Proyecto de master',
			start: now.toDate(),
			end: nowPlus1.toDate(),
		},
	},
	auth: {
		uid: '123',
		name: 'Kamilo',
	},
	ui: {
		modalOpen: true,
	},
}
const store = mockStore(initState)
store.dispatch = jest.fn()

const wrapper = mount(
	<Provider store={store}>
		<CalendarModal />
	</Provider>,
)

describe('Test in <CalendarModal />', () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	test('Should display modal', () => {
		expect(wrapper.find('Modal').prop('isOpen')).toBe(true)
	})

	test('Should call action to open and close Modal', () => {
		wrapper.find('form').simulate('submit', {
			preventDefault() {},
		})

		expect(eventStartUpdate).toHaveBeenCalledWith(initState.calendar.activeEvent)
		expect(eventClearActiveEvent).toHaveBeenCalled()
	})

	test('Should show error if the title is void', () => {
		wrapper.find('form').simulate('submit', {
			preventDefault() {},
		})

		expect(wrapper.find('input[name="title"]').hasClass('is-invalid')).toBe(true)
	})
})
