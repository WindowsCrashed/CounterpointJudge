import { FC, useState } from 'react'
import './style.css'
import { MidiData } from '../../models/models'
import { readMidi } from '../../helpers/readMidi'
import axios from 'axios'

const Home: FC = () => {
	const [midiData, setMidiData] = useState<MidiData>()

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

		const res = await axios.post('http://localhost:3001/counterpoint-judge', midiData)
		console.log(res.data)
	}

	return (
		<div className='home'>
			<h1>ONLINE COUNTERPOINT JUDGE</h1>
			<input type='file' name='midi-file' id='' accept='audio/midi' onChange={handleInput} />
			<button type='submit' onClick={handleSubmit}>
				Judge
			</button>
		</div>
	)
}

export default Home
