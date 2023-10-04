import calculateHarmonicInterval from '../calculators/calculateHarmonicInterval'
import calculateMotion from '../calculators/calculateMotion'
import { Mistake } from '../models/models'

const analyseMotion = (sequence: number[][]): Mistake[] => {
	const mistakes = []
	const motionList = []

	for (let i = 1; i < sequence.length; i++) {
		motionList.push(calculateMotion(sequence[i - 1], sequence[i]))
	}

	// console.log(motionList.map(i => i.label).join(' -> '))

	for (let i = 0; i < motionList.length; i++) {
		const harmonicInterval = calculateHarmonicInterval(sequence[i + 1][0], sequence[i + 1][1])

		if (motionList[i].code === 1 && [0, 7, 12].includes(harmonicInterval.steps)) {
			mistakes.push({
				header: 'DIRECT PERFECT CONSONANCE',
				measures: [i + 1, i + 2],
				notes: [sequence[i], sequence[i + 1]],
				weight: 1.5
			})
		}
	}

	return mistakes
}

export default analyseMotion
