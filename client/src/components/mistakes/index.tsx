import { FC } from 'react'
import { Mistake } from '../../models/models'
import FormatedMistake from './formated-mistake'

type MistakesProps = {
	mistakes: Mistake[]
}

const Mistakes: FC<MistakesProps> = ({ mistakes }) => {
	return (
		<div className='mt-8 rounded-xl bg-white drop-shadow-lg p-5'>
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
	)
}

export default Mistakes
