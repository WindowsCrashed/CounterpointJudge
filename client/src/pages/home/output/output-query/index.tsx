import { FC, useEffect, useState } from 'react'
import Output from '..'
import axios, { isAxiosError } from 'axios'
import { FeedbackData, InputData, TrackVoices } from '../../../../models/models'
import Spinner from 'react-spinner-material'
import handleAxiosError from '../../../../helpers/handleAxiosError'

type OutputQueryProps = {
	dataToSend: InputData
	trackVoices: TrackVoices
	onReturnToInput: Function
}

const OutputQuery: FC<OutputQueryProps> = ({ dataToSend, trackVoices, onReturnToInput }) => {
	const [loading, setLoading] = useState<boolean>(true)
	const [feedback, setFeedback] = useState<FeedbackData>()

	const postData = async () => {
		try {
			const res = await axios.post('http://localhost:3001/counterpoint-judge', dataToSend)
			setFeedback(res.data)
			setLoading(false)
		} catch (e) {
			if (isAxiosError(e)) handleAxiosError(e)
			onReturnToInput()
		}
	}

	useEffect(() => {
		postData()
	}, [])

	return (
		<>
			{loading ? (
				<Spinner color='#fff' radius={50} className='fixed top-96' />
			) : (
				feedback && (
					<Output
						feedback={feedback}
						trackVoices={trackVoices}
						onReturnToInput={onReturnToInput}
					/>
				)
			)}
		</>
	)
}

export default OutputQuery
