import {render, fireEvent} from '@testing-library/react'

import {Post} from './index'

describe('Post component', () => {
	const onMoveMock = jest.fn()

	afterEach(() => {
		jest.clearAllMocks()
	})

	it('should render correctly', () => {
		const {getByText, getByRole} = render(
			<Post id={1} index={0} isUp={true} isDown={true} onMove={onMoveMock} />
		)

		expect(getByText('Post 1')).toBeInTheDocument()
		expect(getByRole('button', {name: /up/i})).toBeInTheDocument()
		expect(getByRole('button', {name: /down/i})).toBeInTheDocument()
	})

	it('should call onMove when the up button is clicked', () => {
		const {getByTitle} = render(
			<Post id={1} index={0} isUp={true} isDown={false} onMove={onMoveMock} />
		)

		fireEvent.click(getByTitle('up'))
		expect(onMoveMock).toHaveBeenCalledWith(0, -1)
	})

	it('should call onMove when the down button is clicked', () => {
		const {getByTitle} = render(
			<Post id={1} index={0} isUp={false} isDown={true} onMove={onMoveMock} />
		)

		fireEvent.click(getByTitle('down'))
		expect(onMoveMock).toHaveBeenCalledWith(0, 1)
	})
})
