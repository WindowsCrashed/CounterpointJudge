import { FC } from 'react'
import FadeIn from 'react-fade-in'
import { Mistake } from '../../models/models'
import FormatedMistake from './formated-mistake'
import Button from '../button'

type MistakesProps = {
	mistakeCount: number
	mistakes: Mistake[]
	onReturnToInput: Function
}

const Mistakes: FC<MistakesProps> = ({ mistakeCount, mistakes, onReturnToInput }) => {
	return (
		<FadeIn
			delay={400}
			transitionDuration={500}
			className='mt-8 flex flex-col justify-center items-center'
		>
			{mistakeCount > 0 && (
				<div className='rounded-xl bg-white drop-shadow-lg p-5'>
					<div className='flex justify-center items-center border-b-2 border-b-gray-300'>
						<div className='mb-3 text-2xl font-bold text-blue-500'>MISTAKES</div>
					</div>
					<div className='mt-5'>
						<ul className='list-none text-lg'>
							{mistakes.map((m, index) => (
								<li className='mt-1' key={index}>
									{<FormatedMistake mistake={m} />}
								</li>
							))}
						</ul>
					</div>
				</div>
			)}

			<div id='sm-output' className='rounded-xl bg-white drop-shadow-lg pl-6 mt-8'></div>
			<Button onClick={onReturnToInput}>Evaluate another exercise</Button>
		</FadeIn>
	)
}

export default Mistakes
