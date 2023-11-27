import { Mistake } from '../../models/models'

const getAllAffectedMeasures = (mistakes: Mistake[]): number[] => {
	const allMeasures: number[] = []

	for (const mistake of mistakes) {
		for (const measure of mistake.measures) {
			if (!allMeasures.includes(measure)) allMeasures.push(measure)
		}
	}

	return allMeasures
}

export default getAllAffectedMeasures
