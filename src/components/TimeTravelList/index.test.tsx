import {render, fireEvent} from '@testing-library/react'

import {Actions} from '@types'
import {TimeTravelList} from './index'

jest.mock('@formkit/auto-animate/react', () => ({
	useAutoAnimate: () => [null]
}))

describe('TimeTravelList component', () => {
	test('renders list of actions', () => {
		const actions = [
			{postId: 1, fromIndex: 0, toIndex: 1, key: 1},
			{postId: 2, fromIndex: 1, toIndex: 2, key: 2}
		]
		const handleTimeTravelMock = jest.fn()
		const {getByText, getAllByTestId} = render(
			<TimeTravelList
				actions={actions}
				handleTimeTravel={handleTimeTravelMock}
			/>
		)

		expect(getByText('List of actions committed')).toBeInTheDocument()
		expect(getAllByTestId('action')).toHaveLength(actions.length)
	})

	test('renders "Empty Actions" when there are no actions', () => {
		const actions: Actions = []
		const handleTimeTravelMock = jest.fn()
		const {getByText} = render(
			<TimeTravelList
				actions={actions}
				handleTimeTravel={handleTimeTravelMock}
			/>
		)

		expect(getByText('Empty Actions')).toBeInTheDocument()
	})

	test('calls handleTimeTravel with correct index when button is clicked', () => {
		const actions = [
			{postId: 1, fromIndex: 0, toIndex: 1, key: 1},
			{postId: 2, fromIndex: 1, toIndex: 2, key: 2}
		]
		const handleTimeTravelMock = jest.fn()
		const {getAllByTestId} = render(
			<TimeTravelList
				actions={actions}
				handleTimeTravel={handleTimeTravelMock}
			/>
		)

		fireEvent.click(getAllByTestId('action')[0])

		expect(handleTimeTravelMock).toHaveBeenCalledWith(0)
	})
})
