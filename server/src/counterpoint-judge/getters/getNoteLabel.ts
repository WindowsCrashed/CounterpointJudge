import { notes } from '../data/db'

const getNoteLabel = (pitch: number): string => {
	if (pitch <= 0) return 'INVALID MIDI PITCH'
	const note = notes.find(n => n.pitch === pitch)
	if (!note) return 'INVALID MIDI PITCH'
	return note.label
}

export default getNoteLabel
