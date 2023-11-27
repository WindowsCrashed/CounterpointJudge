import { FeedbackData } from '../../shared/models'
import calculateScore from '../calculators/calculateScore'
import getAllMistakes from '../getters/getAllMistakes'
import { Mistake } from '../models/models'
import genNoteLabelSequence from './genNoteLabelSequence'
import genMistakeData from './genMistakeData'
import displayFeedback from '../display/displayFeedback'

const genFeedback = (sequence: number[][], mistakes: Mistake[][]): FeedbackData => {
	const allMistakes = getAllMistakes(mistakes)
	const score = calculateScore(sequence, allMistakes)

	displayFeedback(allMistakes, score) // shows feedback in console

	return {
		score: score,
		mistakes: genMistakeData(allMistakes),
		notes: genNoteLabelSequence(sequence)
	}
}

export default genFeedback
