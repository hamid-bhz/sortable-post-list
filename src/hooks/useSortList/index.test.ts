import {renderHook, act} from '@testing-library/react'
import {useSortList} from './index'

jest.mock('../useFetchPosts', () => ({
	useFetchPosts: jest.fn(() => ({
		posts: [
			{id: 1, title: 'Post 1'},
			{id: 2, title: 'Post 2'},
			{id: 3, title: 'Post 3'}
		],
		setPosts: jest.fn()
	}))
}))

describe('useSortList', () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	test('handleTimeTravel reverts actions correctly', () => {
		const {result} = renderHook(() => useSortList())
		const {handleMovePost, handleTimeTravel, posts, actions} = result.current

		act(() => handleMovePost(0, 1))
		act(() => handleTimeTravel(0))

		expect(posts).toEqual([
			{id: 1, title: 'Post 1'},
			{id: 2, title: 'Post 2'},
			{id: 3, title: 'Post 3'}
		])
		expect(actions).toEqual([])
	})
})
