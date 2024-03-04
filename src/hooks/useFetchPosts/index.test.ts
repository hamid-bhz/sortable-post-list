import {renderHook, waitFor} from '@testing-library/react'
import {useFetchPosts} from './index'
import {makeRequest, ApiResponse} from '@service'

jest.mock('@service')

describe('useFetchPosts hook', () => {
	test('fetches posts and updates state', async () => {
		const mockPosts = [
			{id: 1, title: 'Post 1'},
			{id: 2, title: 'Post 2'},
			{id: 3, title: 'Post 3'},
			{id: 4, title: 'Post 4'},
			{id: 5, title: 'Post 5'}
		]
		const mockApiResponse: ApiResponse<typeof mockPosts> = {data: mockPosts}

		;(makeRequest as jest.Mock).mockResolvedValueOnce(mockApiResponse)

		const {result} = renderHook(() => useFetchPosts())

		expect(result.current.posts).toEqual([])

		await waitFor(() => expect(result.current.posts).toEqual(mockPosts))

		expect(makeRequest).toHaveBeenCalledWith(
			'GET',
			'/posts?id=1&id=2&id=3&id=4&id=5'
		)
	})
})
