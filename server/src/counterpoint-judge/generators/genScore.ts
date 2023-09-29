import { FeedbackData } from '../../shared/models'
import calculateScore from '../calculators/calcualteScore'
import getAllMistakes from '../getters/getAllMistakes'
import { Mistake } from '../models/models'
import displayMistake from '../display/displayMistake'
import genNoteLabelSequence from './genNoteLabelSequence'

const genScore = (sequence: number[][], mistakes: Mistake[][]): FeedbackData => {
	const allMistakes = getAllMistakes(mistakes)

	const score = calculateScore(sequence, mistakes)
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
		mistakeCount: mistakeCount,
		mistakes: mistakeList,
		notes: genNoteLabelSequence(sequence)
	}
}

export default genScore
