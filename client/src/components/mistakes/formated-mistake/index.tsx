import { FC } from 'react'
import { Mistake } from '../../../models/models'
import getColorByWeight from '../../../helpers/getColorByWeight'

type FormatedMistakeProps = {
	mistake: Mistake
}

const FormatedMistake: FC<FormatedMistakeProps> = ({ mistake }) => {
	const displayHeader = (header: string, weight: number) => {
		return <span className={`${getColorByWeight(weight)} font-extrabold`}>{header}</span>
	}

	const formatMistake = (mistake: Mistake) => {
		if (mistake.measures.length <= 1) {
			return (
				<span>
					❌ {displayHeader(mistake.header, mistake.weight)} in measure{' '}
					<span className='font-bold'>{mistake.measures[0]}</span>, between notes{' '}
					<span className='font-bold'>{mistake.notes[0]}</span> and{' '}
					<span className='font-bold'>{mistake.notes[1]}</span>.
				</span>
			)
		} else if (typeof mistake.notes[0] === 'string' && typeof mistake.notes[1] === 'string') {
			return (
				<span>
					❌ {displayHeader(mistake.header, mistake.weight)} between measures{' '}
					<span className='font-bold'>{mistake.measures[0]}</span> and{' '}
					<span className='font-bold'>{mistake.measures[1]}</span>, between notes{' '}
					<span className='font-bold'>{mistake.notes[0]}</span> and{' '}
					<span className='font-bold'>{mistake.notes[1]}</span>.
				</span>
			)
		}

		return (
			<span>
				❌ {displayHeader(mistake.header, mistake.weight)} between measures{' '}
				<span className='font-bold'>{mistake.measures[0]}</span> and{' '}
				<span className='font-bold'>{mistake.measures[1]}</span>, between note pairs{' '}
				<span className='font-bold'>'{mistake.notes[0][0]}</span>{' '}
				<span className='font-bold'>{mistake.notes[0][1]}'</span> and
				<span className='font-bold'>'{mistake.notes[1][0]}</span>{' '}
				<span className='font-bold'>{mistake.notes[1][1]}'</span>.
			</span>
		)
	}

	return formatMistake(mistake)
}

export default FormatedMistake
