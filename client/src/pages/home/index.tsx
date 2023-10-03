import { FC, useState } from 'react'
import './style.css'
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

	const showCurrentDisplayComponent = () => {
		if (currentDisplayComponent === 'input') {
			return <Input onSubmit={handleSubmit} />
		}

		if (midiData && trackVoices) {
			return <OutputQuery dataToSend={midiData} trackVoices={trackVoices} />
		}
	}

	return (
		<div className='home'>
			<h1>ONLINE COUNTERPOINT JUDGE</h1>
			<button onClick={() => setCurrentDisplayComponent('input')}>Clear output</button>
			{showCurrentDisplayComponent()}
		</div>
	)
}

export default Home
