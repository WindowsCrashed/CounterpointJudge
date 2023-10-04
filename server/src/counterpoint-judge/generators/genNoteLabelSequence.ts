import getNoteLabel from '../getters/getNoteLabel'

const genNoteLabelSequence = (pitchSequence: number[][]) => {
	if (!pitchSequence) return []

	const sequence: string[][] = pitchSequence.map(pair => [
		getNoteLabel(pair[0]),
		getNoteLabel(pair[1])
	])

	return sequence
}

export default genNoteLabelSequence
