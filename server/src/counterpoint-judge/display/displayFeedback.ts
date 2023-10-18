import { Mistake } from '../models/models'
import displayMistake from './displayMistake'

const displayFeedback = (mistakes: Mistake[], score: number) => {
	const mistakeCount = mistakes.length
	const mistakeList = mistakes.map(m => `- ${displayMistake(m)}`)

	console.log('----------- SCORE -----------\n')
	console.log(`            ${score.toFixed(1)}\n`)
	console.log(`Mistake count: ${mistakeCount}`)
	console.log('Mistakes:')
	mistakeList.forEach(m => console.log(m))
	console.log('--------------------------------')
}

export default displayFeedback
