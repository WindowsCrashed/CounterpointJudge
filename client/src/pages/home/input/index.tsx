import { FC, useState } from 'react'
import { MidiData } from '../../../models/models'
import { readMidi } from '../../../helpers/readMidi'

type InputProps = {
	onSubmit: Function
}

const Input: FC<InputProps> = ({ onSubmit }) => {
	const [midiData, setMidiData] = useState<MidiData>()
	const [mode, setMode] = useState<string>('D')
	const [firstTrack, setFirstTrack] = useState<string>('soprano')
	const [secondTrack, setSecondTrack] = useState<string>('alto')

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

		if (midiData) {
			const dataToSend = midiData
			dataToSend.mode = mode

			onSubmit(dataToSend, { firstTrack, secondTrack })
		}
	}

	return (
		<div className='input'>
			<input type='file' name='midi-file' id='' accept='audio/midi' onChange={handleInput} />
			<label>
				Mode
				<select id='' value={mode} onChange={e => setMode(e.target.value)}>
					<option value='D'>D</option>
					<option value='E'>E</option>
					<option value='F'>F</option>
					<option value='G'>G</option>
					<option value='A'>A</option>
					<option value='C'>C</option>
				</select>
			</label>
			<label>
				First track:
				<select id='' value={firstTrack} onChange={e => setFirstTrack(e.target.value)}>
					<option value='soprano'>soprano</option>
					<option value='alto'>alto</option>
					<option value='tenor'>tenor</option>
					<option value='bass'>bass</option>
				</select>
			</label>
			<label>
				Second track:
				<select id='' value={secondTrack} onChange={e => setSecondTrack(e.target.value)}>
					<option value='soprano'>soprano</option>
					<option value='alto'>alto</option>
					<option value='tenor'>tenor</option>
					<option value='bass'>bass</option>
				</select>
			</label>

			<button type='submit' onClick={handleSubmit}>
				Judge
			</button>
		</div>
	)
}

export default Input
