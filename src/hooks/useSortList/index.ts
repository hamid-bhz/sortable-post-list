import {useState} from 'react'

import {useFetchPosts} from '../useFetchPosts'
import {Actions} from '@types'

export function useSortList() {
	const {posts, setPosts} = useFetchPosts()
	const [actions, setActions] = useState<Actions>([])

	const handleMove = (currentIndex: number, targetIndex: number) => {
		setPosts((prevPosts) => {
			const updatedPosts = [...prevPosts]
			const movedPost = updatedPosts.splice(currentIndex, 1)[0]
			updatedPosts.splice(targetIndex, 0, movedPost)

			return updatedPosts
		})
	}

	const handleMovePost = (currentIndex: number, targetIndex: number) => {
		setPosts((prevPosts) => {
			const updatedPosts = [...prevPosts]
			const movedPost = updatedPosts.splice(currentIndex, 1)[0]
			updatedPosts.splice(targetIndex, 0, movedPost)

			const action = {
				postId: movedPost.id,
				fromIndex: currentIndex,
				toIndex: targetIndex,
				key: Math.random()
			}

			setActions([action, ...actions])

			return updatedPosts
		})
	}

	const handleTimeTravel = (index: number): void => {
		if (index < 0 || index >= actions.length) return

		const actionsToRevert = actions.slice(0, index + 1)

		actionsToRevert.forEach((action) => {
			handleMove(action.toIndex, action.fromIndex)
		})

		setActions(actions.slice(index + 1))
	}

	return {posts, actions, handleMovePost, handleTimeTravel}
}
