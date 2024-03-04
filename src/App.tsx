import {PostList, TimeTravelList} from '@components'
import {useSortList} from '@hooks'

function App() {
	const {posts, actions, handleMovePost, handleTimeTravel} = useSortList()

	return (
		<>
			<div className="border-l-secondary absolute -z-10 border-b-[20vw] border-l-[100vw] border-b-transparent"></div>
			<div className="mx-auto grid max-w-[900px] gap-12 p-8 sm:grid-cols-[1fr_1.1fr]">
				<PostList posts={posts} handleMove={handleMovePost} />
				<TimeTravelList actions={actions} handleTimeTravel={handleTimeTravel} />
			</div>
		</>
	)
}

export default App
