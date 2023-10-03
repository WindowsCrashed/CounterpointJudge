import { FC, useEffect, useRef, useState } from 'react'
import { FeedbackData, TrackVoices } from '../../../models/models'
import genSheetMusic from '../../../helpers/genSheetMusic'
import MDSpinner from 'react-md-spinner'
import FadeIn from 'react-fade-in/lib/FadeIn'
import Score from '../../../components/score'
import './style.css'
import Mistakes from '../../../components/mistakes'

type OutputProps = {
	feedback: FeedbackData
	trackVoices: TrackVoices
}

const Output: FC<OutputProps> = ({ feedback, trackVoices }) => {
	const [loading, setLoading] = useState(true)
	const hasRun = useRef<boolean>(false)

	useEffect(() => {
		if (!hasRun.current) {
			hasRun.current = true
			genSheetMusic('sm-output', feedback, trackVoices)
			setLoading(false)
		}
	}, [])

	return (
		<>
			{loading && <MDSpinner />}

			<div className={`output ${loading ? 'invisible' : ''}`}>
				<div className='fade-in-container'>
					<FadeIn delay={250} transitionDuration={500} className='fade-in-container'>
						<Score score={feedback.score} />
						<Mistakes
							mistakeCount={feedback.mistakeCount}
							mistakes={feedback.mistakes}
						/>
					</FadeIn>
				</div>
			</div>
		</>
	)
}

export default Output
