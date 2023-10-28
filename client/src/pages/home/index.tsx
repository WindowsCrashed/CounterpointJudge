import { FC, useState } from 'react'
import { InputData, TrackVoices } from '../../models/models'
import Input from './input'
import OutputQuery from './output/output-query'
import Header from '../../components/header'

const Home: FC = () => {
	const [midiData, setMidiData] = useState<InputData>()
	const [trackVoices, setTrackVoices] = useState<TrackVoices>()
	const [currentDisplayComponent, setCurrentDisplayComponent] = useState<'input' | 'output'>(
		'input'
	)

	const handleSubmit = (midiData: InputData, trackVoices: TrackVoices) => {
		setMidiData(midiData)
		setTrackVoices(trackVoices)
		setCurrentDisplayComponent('output')
	}

	const returnToInputScreen = () => setCurrentDisplayComponent('input')

	const showCurrentDisplayComponent = () => {
		if (currentDisplayComponent === 'input') return <Input onSubmit={handleSubmit} />

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
		<div className='flex flex-col items-center justify-start h-screen max-w-screen-lg'>
			<Header page={currentDisplayComponent} />
			{showCurrentDisplayComponent()}
		</div>
	)
}

export default Home
