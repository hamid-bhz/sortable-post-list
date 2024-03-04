import {FC} from 'react'
import {useAutoAnimate} from '@formkit/auto-animate/react'

import {Spinner} from '@icons'
import {Posts} from '@types'
import {Post} from '../Post'

type Props = {
	posts: Posts
	handleMove: (currentIndex: number, targetIndex: number) => void
}

export const PostList: FC<Props> = ({posts, handleMove}) => {
	const [animationParent] = useAutoAnimate()

	return (
		<div>
			<header className="mb-3 text-xl text-white">Sortable Post List</header>
			<ul ref={animationParent}>
				{Boolean(posts && posts.length) ? (
					posts?.map((post, index) => (
						<Post
							key={post.id}
							isDown={index < posts.length - 1}
							isUp={index > 0}
							id={post.id}
							index={index}
							onMove={handleMove}
						/>
					))
				) : (
					<Spinner />
				)}
			</ul>
		</div>
	)
}
