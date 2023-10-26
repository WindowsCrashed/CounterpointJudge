import { InputData } from '../../shared/models'

const genSequence = (inputData: InputData) => {
	const tracksInverted = [inputData.tracks[1], inputData.tracks[0]]

	const greatestTrackLength = Math.max(...tracksInverted.map(t => t.length))

	const sequence: number[][] = []

	for (let i = 0; i < greatestTrackLength; i++) {
		sequence.push([])
		tracksInverted.forEach(t => sequence[i].push(t[i]))
	}

	return sequence
}

export default genSequence
