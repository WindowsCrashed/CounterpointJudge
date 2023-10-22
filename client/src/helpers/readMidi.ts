import { Midi } from '@tonejs/midi'
import { InputData } from '../models/models'

export const readMidi = (file: ArrayBuffer) => {
	const midi = new Midi(file)
	const data: InputData = {
		tracks: midi.tracks.map(t => t.notes.map(n => n.midi))
	}

	return data
}
