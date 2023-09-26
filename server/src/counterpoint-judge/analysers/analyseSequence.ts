import analyseHarmonicIntervals from './analyseHarmonicIntervals'
import analyseMelodicIntervals from './analyseMelodicIntervals'

const analyseSequence = (sequence: number[][], mode: string = 'D') => {
	const mistakes = []

	mistakes.push(analyseHarmonicIntervals(sequence))
	mistakes.push(analyseMelodicIntervals(sequence))
	// mistakes.push(analyseMotion(sequence))
	// mistakes.push(analyseMode(sequence, mode))

	// displayScore(sequence, mistakes)

	// temp
	mistakes.forEach(m => m.forEach(m1 => console.log(m1.header)))
}

export default analyseSequence
