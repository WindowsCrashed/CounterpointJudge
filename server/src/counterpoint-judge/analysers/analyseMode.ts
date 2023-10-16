import getMode from '../getters/getMode'
import getNoteLabel from '../getters/getNoteLabel'
import { Mistake, Mode } from '../models/models'

const analyseMode = (sequence: number[][], mode: string): Mistake[] => {
	const mistakes: Mistake[] = []
	const modeObj: Mode = getMode(mode)

	if (modeObj.code !== -1) {
		const firstPair = sequence[0].map(note => {
			const label = getNoteLabel(note)
			return label.substring(0, label.length - 1)
		})

		const lastPair = sequence[sequence.length - 1].map(note => {
			const label = getNoteLabel(note)
			return label.substring(0, label.length - 1)
		})

		if (
			!firstPair.every(note => modeObj.triad.includes(note)) ||
			!firstPair.includes(modeObj.triad[0])
		) {
			mistakes.push({
				header: 'INCORRECT MODE BEGINNING',
				measures: [1],
				notes: sequence[0],
				weight: 1.5
			})
		}

		if (
			!lastPair.every(note => modeObj.triad.includes(note)) ||
			!lastPair.includes(modeObj.triad[0])
		) {
			mistakes.push({
				header: 'INCORRECT MODE TERMINATION',
				measures: [sequence.length],
				notes: sequence[sequence.length - 1],
				weight: 1.5
			})
		}
	}

	return mistakes
}

export default analyseMode
