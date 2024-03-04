import {FC} from 'react'
import {Action} from '@types'

type Props = {
	action: Action
	index: number
	onTimeTravel: (index: number) => void
}

export const TimeTravel: FC<Props> = ({action, index, onTimeTravel}) => {
	return (
		<div className="flex items-center gap-2 bg-white p-2 text-xs">
			<span className="grow" data-testid="timetravel-title">
				Moved Post {action.postId} from index {action.fromIndex} to index{' '}
				{action.toIndex}
			</span>

			<button
				className="rounded bg-primary px-4 py-2 font-semibold hover:brightness-90 active:brightness-75"
				data-testid="action"
				onClick={() => onTimeTravel(index)}
			>
				Time travel
			</button>
		</div>
	)
}
