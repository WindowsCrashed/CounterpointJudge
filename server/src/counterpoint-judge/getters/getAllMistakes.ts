import { Mistake } from '../models/models'

const getAllMistakes = (mistakes: Mistake[][]): Mistake[] => {
	const allMistakes = []

	for (const mistake of mistakes) {
		for (const subitem of mistake) {
			if (subitem) allMistakes.push(subitem)
		}
	}

	return allMistakes
}

export default getAllMistakes
