import { FC, useState } from 'react'
import { MidiData, TrackVoices } from '../../models/models'
import Input from './input'
import OutputQuery from './output/output-query'

const Home: FC = () => {
	const [midiData, setMidiData] = useState<MidiData>()
	const [trackVoices, setTrackVoices] = useState<TrackVoices>()
	const [currentDisplayComponent, setCurrentDisplayComponent] = useState<'input' | 'output'>(
		'input'
	)

	const handleSubmit = (midiData: MidiData, trackVoices: TrackVoices) => {
		setMidiData(midiData)
		setTrackVoices(trackVoices)
		setCurrentDisplayComponent('output')
	}

	const returnToInputScreen = () => {
		setCurrentDisplayComponent('input')
	}

	const showCurrentDisplayComponent = () => {
		if (currentDisplayComponent === 'input') {
			return <Input onSubmit={handleSubmit} />
		}

		if (midiData && trackVoices) {
			return (
				<OutputQuery
					dataToSend={midiData}
					trackVoices={trackVoices}
					onReturnToInput={returnToInputScreen}
				/>
			)
		}
	}

	return (
		<div className='flex flex-col items-center justify-start h-screen'>
			<div className='text-white font-extrabold text-3xl mb-10 mt-10 drop-shadow-lg'>
				🎼 ONLINE COUNTERPOINT JUDGE 🎼
			</div>
			{showCurrentDisplayComponent()}
		</div>
	)
}

export default Home
