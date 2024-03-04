import {FC} from 'react'
import {Chevron} from '@icons'

type Props = {
	id: number
	index: number
	isUp: boolean
	isDown: boolean
	onMove: (currentIndex: number, targetIndex: number) => void
}

export const Post: FC<Props> = ({index, id, isDown, isUp, onMove}) => {
	return (
		<li className="group grid shrink-0" data-testid="post">
			<div className="m-2 ml-0 flex h-16 items-center justify-between rounded bg-white p-2 text-base shadow-md">
				<span className="text-neutral-500">Post {id}</span>

				<div className="flex h-full flex-col justify-between bg-white text-secondary focus:outline-none group-first:justify-center group-last:justify-center">
					{isUp && (
						<button
							className="focus:outline-none"
							title="up"
							type="button"
							onClick={() => onMove(index, index - 1)}
						>
							<Chevron direction="up" />
						</button>
					)}

					{isDown && (
						<button
							className="focus:outline-none"
							title="down"
							type="button"
							onClick={() => onMove(index, index + 1)}
						>
							<Chevron direction="down" />
						</button>
					)}
				</div>
			</div>
		</li>
	)
}
