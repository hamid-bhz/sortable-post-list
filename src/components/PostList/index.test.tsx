import {render, fireEvent} from '@testing-library/react'
import {PostList} from './index'

jest.mock('@formkit/auto-animate/react', () => ({
	useAutoAnimate: () => [null]
}))

describe('PostList component', () => {
	test('renders a list of posts', () => {
		const posts = [
			{id: 1, title: 'Post 1'},
			{id: 2, title: 'Post 2'},
			{id: 3, title: 'Post 3'}
		]
		const handleMoveMock = jest.fn()
		const {getByText, getAllByTestId} = render(
			<PostList posts={posts} handleMove={handleMoveMock} />
		)

		expect(getByText('Sortable Post List')).toBeInTheDocument()
		expect(getAllByTestId('post')).toHaveLength(posts.length)
	})

	test('calls handleMove when moving posts', () => {
		const posts = [
			{id: 1, title: 'Post 1'},
			{id: 2, title: 'Post 2'},
			{id: 3, title: 'Post 3'}
		]
		const handleMoveMock = jest.fn()
		const {getAllByTestId} = render(
			<PostList posts={posts} handleMove={handleMoveMock} />
		)

		const postElements = getAllByTestId('post')
		expect(postElements.length).toBeGreaterThan(0)

		const downButton = postElements[0].querySelector('[title="down"]')
		if (downButton) {
			fireEvent.click(downButton)
			expect(handleMoveMock).toHaveBeenCalledWith(0, 1)
		} else {
			console.error('Down button not found on the first post.')
			expect(true).toBe(false)
		}
	})
})
