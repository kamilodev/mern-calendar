import React from 'react'
import { mount } from 'enzyme'
import { DeleteEventFab } from '../../ui/DeleteEventFab'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'
import { eventStartDelete } from '../../actions/events'

jest.mock('../../actions/events', () => ({
	eventStartDelete: jest.fn(),
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {}
const store = mockStore(initState)
store.dispatch = jest.fn()

const wrapper = mount(
	<Provider store={store}>
		<DeleteEventFab />
	</Provider>,
)

describe('Test in <DeleteEventFab />', () => {
	test('Should be displayed correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})

	test('Should call eventStartDelete when clicked', () => {
		wrapper.find('button').prop('onClick')()

		expect(eventStartDelete).toHaveBeenCalled()
	})
})
