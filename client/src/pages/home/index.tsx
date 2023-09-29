import { FC, useEffect, useRef, useState } from 'react'
import './style.css'
import { FeedbackData, MidiData } from '../../models/models'
import { readMidi } from '../../helpers/readMidi'
import axios from 'axios'
import genSheetMusic from '../../helpers/genSheetMusic'

const Home: FC = () => {
	const [midiData, setMidiData] = useState<MidiData>()
	const [mode, setMode] = useState<string>('D')
	const [feedback, setFeedback] = useState<FeedbackData>()
	const outputDiv = useRef<HTMLDivElement>(null)

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()

		if (e.target.files !== null && e.target.files.length) {
			const reader = new FileReader()

			reader.addEventListener('load', e => {
				const result = e.target?.result

				if (result !== null && result !== undefined && typeof result !== 'string') {
					const data = readMidi(result)
					setMidiData(data)
					console.log(data)
				}
			})

			reader.readAsArrayBuffer(e.target.files[0])
		}
	}

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		if (outputDiv.current) outputDiv.current.innerHTML = ''

		if (midiData) {
			const dataToSend = midiData
			dataToSend.mode = mode

			const res = await axios.post('http://localhost:3001/counterpoint-judge', dataToSend)

			setFeedback(res.data)
			genSheetMusic('output', res.data)
			console.log(res.data)
		}
	}

	useEffect(() => {
		// runTestFux()
	}, [])

	return (
		<div className='home'>
			<h1>ONLINE COUNTERPOINT JUDGE</h1>
			<input type='file' name='midi-file' id='' accept='audio/midi' onChange={handleInput} />
			<select id='' value={mode} onChange={e => setMode(e.target.value)}>
				<option value='D'>D</option>
				<option value='E'>E</option>
				<option value='F'>F</option>
				<option value='G'>G</option>
				<option value='A'>A</option>
				<option value='C'>C</option>
			</select>
			<button type='submit' onClick={handleSubmit}>
				Judge
			</button>
			{feedback && (
				<div>
					<h2>Score: {feedback.score.toFixed(1)}</h2>
					<p>Mistake count: {feedback.mistakeCount}</p>
					<p>Mistakes:</p>
					<ul>
						{feedback.mistakes.map((m, index) => (
							<li key={index}>{m}</li>
						))}
					</ul>
				</div>
			)}
			<div id='output' ref={outputDiv}></div>
		</div>
	)
}

export default Home
