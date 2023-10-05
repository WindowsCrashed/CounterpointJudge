import { FC, useState } from 'react'
import { MidiData } from '../../../models/models'
import { readMidi } from '../../../helpers/readMidi'
import Button from '../../../components/button'
import { Tooltip } from 'react-tooltip'
import Select from '../../../components/select'
import Separator from '../../../components/separator'

const modes = ['D', 'E', 'F', 'G', 'A', 'C']

const voices = ['Soprano', 'Alto', 'Tenor', 'Bass']

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

	const handleSubmit = () => {
		if (midiData) {
			const dataToSend = midiData
			dataToSend.mode = mode

			onSubmit(dataToSend, { firstTrack, secondTrack })
		}
	}

	return (
		<div className='flex flex-col justify-center items-center'>
			<div className='input bg-white rounded-lg drop-shadow-lg p-6 flex flex-col justify-center items-center'>
				<div className='flex items-center justify-center mb-3'>
					<label
						className='border-2 p-4 text-xl font-bold rounded-xl drop-shadow-lg transition-all bg-blue-500 text-white border-blue-500 hover:bg-blue-700 hover:border-blue-700 active:bg-blue-800 active:text-gray-200 cursor-pointer'
						data-tooltip-id='select-counterpoint-label'
					>
						{'SELECT COUNTERPOINT'}
						<input
							className='hidden'
							type='file'
							name='midi-file'
							id=''
							accept='audio/midi'
							onChange={handleInput}
						/>
					</label>
					<Tooltip
						id='select-counterpoint-label'
						place='top'
						content='Select MIDI (.mid) file'
					/>
				</div>
				<Separator label='Parameters' />
				<Select
					label='Mode'
					options={modes}
					value={mode}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMode(e.target.value)}
				/>
				<Select
					label='First track voice'
					options={voices}
					value={firstTrack}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setFirstTrack(e.target.value)
					}
				/>
				<Select
					label='Second track voice'
					options={voices}
					value={secondTrack}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setSecondTrack(e.target.value)
					}
				/>
			</div>
			<Button onClick={handleSubmit}>JUDGE COUNTERPOINT</Button>
		</div>
	)
}

export default Input
