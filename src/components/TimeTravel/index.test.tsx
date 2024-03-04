import {render, fireEvent} from '@testing-library/react'
import {TimeTravel} from './index'

describe('TimeTravel component', () => {
	test('renders correct message', () => {
		const action = {
			postId: 123,
			fromIndex: 1,
			toIndex: 3,
			key: 1
		}
		const index = 2
		const onTimeTravelMock = jest.fn()

		const {getByTestId} = render(
			<TimeTravel
				action={action}
				index={index}
				onTimeTravel={onTimeTravelMock}
			/>
		)

		expect(getByTestId('timetravel-title')).toBeInTheDocument()
		expect(getByTestId('timetravel-title')).toHaveTextContent(
			`Moved Post ${action.postId} from index ${action.fromIndex} to index ${action.toIndex}`
		)
	})

	test('calls onTimeTravel with correct index when button is clicked', () => {
		const action = {
			postId: 123,
			fromIndex: 1,
			toIndex: 3,
			key: 1
		}
		const index = 2
		const onTimeTravelMock = jest.fn()

		const {getByTestId} = render(
			<TimeTravel
				action={action}
				index={index}
				onTimeTravel={onTimeTravelMock}
			/>
		)

		fireEvent.click(getByTestId('action'))
		expect(onTimeTravelMock).toHaveBeenCalledWith(index)
	})
})
