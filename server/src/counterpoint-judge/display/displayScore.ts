import calculateScore from '../calculators/calcualteScore'
import getAllMistakes from '../getters/getAllMistakes'
import { Mistake } from '../models/models'
import displayMistake from './displayMistake'

const displayScore = (sequence: number[][], mistakes: Mistake[][]) => {
	const score = calculateScore(sequence, mistakes)
	const allMistakes = getAllMistakes(mistakes)

	console.log('----------- SCORE -----------\n')
	console.log(`            ${score.toFixed(1)}\n`)
	console.log(`Mistake count: ${allMistakes.length}`)
	console.log('Mistakes:')
	allMistakes.forEach(m => console.log(`- ${displayMistake(m)}`))
	console.log('--------------------------------')
}

export default displayScore
