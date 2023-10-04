import { FC, useEffect, useRef } from 'react'
import { FeedbackData, TrackVoices } from '../../../models/models'
import genSheetMusic from '../../../helpers/genSheetMusic'
import FadeIn from 'react-fade-in/lib/FadeIn'
import Score from '../../../components/score'
import Mistakes from '../../../components/mistakes'

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
		<div className='output'>
			<div className='fade-in-container'>
				<FadeIn
					delay={250}
					transitionDuration={500}
					className='flex flex-col items-center justify-center'
				>
					<Score score={feedback.score} />
					<Mistakes
						mistakeCount={feedback.mistakeCount}
						mistakes={feedback.mistakes}
						onReturnToInput={onReturnToInput}
					/>
				</FadeIn>
			</div>
		</div>
	)
}

export default Output
