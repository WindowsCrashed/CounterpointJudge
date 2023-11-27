import getNoteLabel from '../getters/getNoteLabel'

const genNoteLabelPair = (noteNumberPair: number[]): string[] =>
	noteNumberPair.map(note => {
		const label = getNoteLabel(note)
		return label.substring(0, label.length - 1)
	})

export default genNoteLabelPair
