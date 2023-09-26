import { MidiData } from '../models/models'

// Only works for multi track midi
const genSequence = (midiData: MidiData) => {
	if (midiData.trackCount === 0) return []

	const tracksInverted = [midiData.tracks[1], midiData.tracks[0]]

	const greatestTrackLength = Math.max(...tracksInverted.map(t => t.length))

	const sequence: number[][] = []

	for (let i = 0; i < greatestTrackLength; i++) {
		sequence.push([])
		tracksInverted.forEach(t => sequence[i].push(t[i]))
	}

	return sequence
}

export default genSequence
