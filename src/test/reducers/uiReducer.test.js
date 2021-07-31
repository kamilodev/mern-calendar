import { uiReducer } from '../../reducers/uiReducer'
import { uiCloseModal, uiOpenModal } from '../../actions/ui'

const initState = {
	modalOpen: false,
}

describe('Test in iuReducer', () => {
	test('Should return default state', () => {
		const state = uiReducer(initState, {})
		expect(state).toEqual(initState)
	})

	test('Should open and close modal', () => {
		const modalOpen = uiOpenModal()
		const state = uiReducer(initState, modalOpen)

		expect(state).toEqual({ modalOpen: true })

		const modalClose = uiCloseModal()
		const stateClose = uiReducer(state, modalClose)

		expect(stateClose).toEqual({ modalOpen: false })
	})
})
