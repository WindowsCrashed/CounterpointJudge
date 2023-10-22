import { Midi } from '@tonejs/midi'
import { MidiData } from '../models/models'

export const readMidi = (file: ArrayBuffer) => {
	const midi = new Midi(file)
	const data: MidiData = {
		tracks: midi.tracks.map(t => t.notes.map(n => n.midi))
	}

	return data
}
