import { FC, useEffect, useState } from 'react'
import Output from '..'
import axios from 'axios'
import { FeedbackData, MidiData, TrackVoices } from '../../../../models/models'
import MDSpinner from 'react-md-spinner'

type OutputQueryProps = {
	dataToSend: MidiData
	trackVoices: TrackVoices
}

const OutputQuery: FC<OutputQueryProps> = ({ dataToSend, trackVoices }) => {
	const [loading, setLoading] = useState<boolean>(true)
	const [feedback, setFeedback] = useState<FeedbackData>()

	const postData = async () => {
		const res = await axios.post('http://localhost:3001/counterpoint-judge', dataToSend)
		console.log(res.data)
		setFeedback(res.data)
		setLoading(false)
	}

	useEffect(() => {
		postData()
	}, [])

	return (
		<>
			{loading ? (
				<MDSpinner />
			) : (
				feedback && <Output feedback={feedback} trackVoices={trackVoices} />
			)}
		</>
	)
}

export default OutputQuery
