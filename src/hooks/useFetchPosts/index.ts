import {useEffect, useState} from 'react'

import {makeRequest} from '@service'
import {Posts} from '@types'

export function useFetchPosts() {
	const [posts, setPosts] = useState<Posts>([])

	useEffect(() => {
		async function getPosts() {
			const response = await makeRequest<Posts>(
				'GET',
				'/posts?id=1&id=2&id=3&id=4&id=5'
			)

			setPosts(response.data)
		}

		getPosts()
	}, [])

	return {posts, setPosts}
}
