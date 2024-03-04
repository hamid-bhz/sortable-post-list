import {FC} from 'react'
import {DIRECTION} from '@constants'

type Props = {
	direction: (typeof DIRECTION)[keyof typeof DIRECTION]
}

export const Chevron: FC<Props> = ({direction}) => {
	switch (direction) {
		case DIRECTION.UP:
			return (
				<svg
					className="h-4 w-4"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<polyline points="18 15 12 9 6 15" />
				</svg>
			)

		case DIRECTION.DOWN:
			return (
				<svg
					className="h-4 w-4"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<polyline points="6 9 12 15 18 9" />
				</svg>
			)

		default:
			break
	}
}
