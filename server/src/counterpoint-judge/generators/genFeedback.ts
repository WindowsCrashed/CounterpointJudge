import { FeedbackData } from '../../shared/models'
import calculateScore from '../calculators/calculateScore'
import getAllMistakes from '../getters/getAllMistakes'
import { Mistake } from '../models/models'
import displayMistake from '../display/displayMistake'
import genNoteLabelSequence from './genNoteLabelSequence'
import genMistakeData from './genMistakeData'

const genFeedback = (sequence: number[][], mistakes: Mistake[][]): FeedbackData => {
	const allMistakes = getAllMistakes(mistakes)

	const score = calculateScore(sequence, allMistakes)
	const mistakeCount = allMistakes.length
	const mistakeList = allMistakes.map(m => `- ${displayMistake(m)}`)

	// temp
	console.log('----------- SCORE -----------\n')
	console.log(`            ${score.toFixed(1)}\n`)
	console.log(`Mistake count: ${mistakeCount}`)
	console.log('Mistakes:')
	mistakeList.forEach(m => console.log(m))
	console.log('--------------------------------')

	return {
		score: score,
		mistakes: genMistakeData(allMistakes),
		notes: genNoteLabelSequence(sequence)
	}
}

export default genFeedback
