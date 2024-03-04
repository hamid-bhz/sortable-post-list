import {FC} from 'react'
import {useAutoAnimate} from '@formkit/auto-animate/react'

import {Actions} from '@types'
import {TimeTravel} from '../TimeTravel'

type Props = {
	actions: Actions
	handleTimeTravel: (index: number) => void
}

export const TimeTravelList: FC<Props> = ({actions, handleTimeTravel}) => {
	const [animationParent] = useAutoAnimate()

	return (
		<div className="overflow-hidden rounded">
			<header className="bg-white p-4 text-lg font-semibold">
				List of actions committed
			</header>

			<div className="bg-neutral-100 p-4">
				{!Boolean(actions.length) && (
					<div className="text-xs" role="status">
						Empty Actions
					</div>
				)}

				{Boolean(actions.length) && (
					<div
						className="divide-y divide-gray-200 overflow-hidden rounded shadow-md"
						ref={animationParent}
					>
						{actions.map((action, index) => (
							<TimeTravel
								key={action.key}
								action={action}
								index={index}
								onTimeTravel={handleTimeTravel}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	)
}
