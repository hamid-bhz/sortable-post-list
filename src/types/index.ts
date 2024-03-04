export type Action = {
	postId: number
	fromIndex: number
	toIndex: number
	key: number
}

export type Post = {
	id: number
	title: string
}

export type Actions = Action[]
export type Posts = Post[]
