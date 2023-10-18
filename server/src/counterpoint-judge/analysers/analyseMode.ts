import genNoteLabelPair from '../generators/genNoteLabelPair'
import getMode from '../getters/getMode'
import { Mistake, Mode } from '../models/models'

const analyseMode = (sequence: number[][], modeLabel: string): Mistake[] => {
	const mistakes: Mistake[] = []
	const mode: Mode = getMode(modeLabel)

	const firstPair = genNoteLabelPair(sequence[0])
	const lastPair = genNoteLabelPair(sequence[sequence.length - 1])

	if (!firstPair.every(note => mode.triad.includes(note)) || !firstPair.includes(mode.triad[0])) {
		mistakes.push({
			header: 'INCORRECT MODE BEGINNING',
			measures: [1],
			notes: sequence[0],
			weight: 1.5
		})
	}

	if (!lastPair.every(note => mode.triad.includes(note)) || !lastPair.includes(mode.triad[0])) {
		mistakes.push({
			header: 'INCORRECT MODE TERMINATION',
			measures: [sequence.length],
			notes: sequence[sequence.length - 1],
			weight: 1.5
		})
	}

	return mistakes
}

export default analyseMode
