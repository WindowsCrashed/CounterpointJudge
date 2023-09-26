import { Midi } from '@tonejs/midi'
import { MidiData } from '../models/models'

export const readMidi = (file: ArrayBuffer) => {
	const midi = new Midi(file)
	const data: MidiData = {
		trackCount: midi.tracks.length,
		tracks: midi.tracks.map(t => t.notes)
	}
	return data
}
