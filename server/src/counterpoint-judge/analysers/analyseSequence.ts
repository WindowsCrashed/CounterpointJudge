import { FeedbackData } from '../../shared/models'
import genScore from '../generators/genScore'
import { Mistake } from '../models/models'
import analyseHarmonicIntervals from './analyseHarmonicIntervals'
import analyseMelodicIntervals from './analyseMelodicIntervals'
import analyseMode from './analyseMode'
import analyseMotion from './analyseMotion'

const analyseSequence = (sequence: number[][], mode: string = 'D'): FeedbackData => {
	const mistakes: Mistake[][] = []

	mistakes.push(analyseHarmonicIntervals(sequence))
	mistakes.push(analyseMelodicIntervals(sequence))
	mistakes.push(analyseMotion(sequence))
	mistakes.push(analyseMode(sequence, mode))

	return genScore(sequence, mistakes)
}

export default analyseSequence
