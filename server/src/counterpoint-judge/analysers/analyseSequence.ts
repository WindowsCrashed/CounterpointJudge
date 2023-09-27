import displayScore from '../display/displayScore'
import { Mistake } from '../models/models'
import analyseHarmonicIntervals from './analyseHarmonicIntervals'
import analyseMelodicIntervals from './analyseMelodicIntervals'
import analyseMode from './analyseMode'
import analyseMotion from './analyseMotion'

const analyseSequence = (sequence: number[][], mode: string = 'D') => {
	const mistakes: Mistake[][] = []

	mistakes.push(analyseHarmonicIntervals(sequence))
	mistakes.push(analyseMelodicIntervals(sequence))
	mistakes.push(analyseMotion(sequence))
	mistakes.push(analyseMode(sequence, mode))

	displayScore(sequence, mistakes)

	// temp
	// mistakes.forEach(m => m.forEach(m1 => console.log(m1.header)))
}

export default analyseSequence
