import getMistakeNoteCount from '../getters/getMistakeNoteCount'
import { Mistake } from '../models/models'

const calculateScore = (sequence: number[][], mistakes: Mistake[]): number => {
	const noteCount = sequence.length * 2

	// two options to calculate score: "Math.floor(1000 / noteCount) / 10" and "100 / noteCount"
	// second option is less forgiving

	const pointsPerNote = 100 / noteCount
	let score = 100

	for (const mistake of mistakes) {
		score -= pointsPerNote * mistake.weight * getMistakeNoteCount(mistake)
	}

	if (score < 0) return 0

	return score
}

export default calculateScore
