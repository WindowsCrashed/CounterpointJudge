import calculateHarmonicInterval from '../calculators/calculateHarmonicInterval'
import calculateMelodicInterval from '../calculators/calculateMelodicInterval'
import calculateMotion from '../calculators/calculateMotion'
import { Mistake } from '../models/models'

const analyseBattuta = (
	previousPair: number[],
	currentPair: number[],
	currentMeasure: number
): Mistake | undefined => {
	if (calculateMotion(previousPair, currentPair).code === -1) {
		const topNotes = [previousPair[1], currentPair[1]]
		const bottomNotes = [previousPair[0], currentPair[0]]

		if (
			calculateMelodicInterval(topNotes[0], topNotes[1]) >= 3 &&
			calculateMelodicInterval(bottomNotes[0], bottomNotes[1]) <= 2
		) {
			return {
				header: 'BATTUTA',
				measures: [currentMeasure, currentMeasure + 1],
				notes: [previousPair, currentPair],
				weight: 0.5
			}
		} else if (
			calculateMelodicInterval(topNotes[0], topNotes[1]) <= 2 &&
			calculateMelodicInterval(bottomNotes[0], bottomNotes[1]) <= 2
		) {
			if (
				calculateHarmonicInterval(currentPair[0], currentPair[1]) === 12 &&
				[3, 4].includes(calculateHarmonicInterval(previousPair[0], previousPair[1]))
			) {
				return {
					header: 'BATTUTA',
					measures: [currentMeasure, currentMeasure + 1],
					notes: [previousPair, currentPair],
					weight: 0.5
				}
			}
		}
	}

	return undefined
}

export default analyseBattuta
