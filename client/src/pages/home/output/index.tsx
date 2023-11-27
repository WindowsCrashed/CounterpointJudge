import { FC, useEffect, useRef } from 'react'
import { FeedbackData, TrackVoices } from '../../../models/models'
import genSheetMusic from '../../../helpers/sheet-music/genSheetMusic'
import FadeIn from 'react-fade-in/lib/FadeIn'
import Score from '../../../components/score'
import Mistakes from '../../../components/mistakes'
import Button from '../../../components/button'

type OutputProps = {
	feedback: FeedbackData
	trackVoices: TrackVoices
	onReturnToInput: Function
}

const Output: FC<OutputProps> = ({ feedback, trackVoices, onReturnToInput }) => {
	const hasRun = useRef<boolean>(false)

	useEffect(() => {
		if (!hasRun.current) {
			hasRun.current = true
			genSheetMusic('sm-output', feedback, trackVoices)
		}
	}, [])

	return (
		<div className='output pb-10'>
			<FadeIn delay={250} className='flex flex-col items-center justify-center'>
				<Score score={feedback.score} />
				{feedback.mistakes.length > 0 && <Mistakes mistakes={feedback.mistakes} />}
				<div id='sm-output' className='rounded-xl bg-white drop-shadow-lg pl-6 mt-8'></div>
				<Button onClick={onReturnToInput}>JUDGE ANOTHER COUNTERPOINT</Button>
			</FadeIn>
		</div>
	)
}

export default Output
