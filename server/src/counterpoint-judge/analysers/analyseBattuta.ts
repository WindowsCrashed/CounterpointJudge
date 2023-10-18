import calculateHarmonicInterval from '../calculators/calculateHarmonicInterval'
import calculateMelodicInterval from '../calculators/calculateMelodicInterval'
import calculateMotion from '../calculators/calculateMotion'

const analyseBattuta = (previousPair: number[], currentPair: number[]): boolean => {
	if (calculateMotion(previousPair, currentPair) === -1) {
		if (
			calculateMelodicInterval(previousPair[1], currentPair[1]) >= 3 &&
			calculateMelodicInterval(previousPair[0], currentPair[0]) <= 2
		) {
			return true
		}

		if (
			calculateMelodicInterval(previousPair[1], currentPair[1]) <= 2 &&
			calculateMelodicInterval(previousPair[0], currentPair[0]) <= 2
		) {
			if (
				calculateHarmonicInterval(currentPair[0], currentPair[1]) === 12 &&
				[3, 4].includes(calculateHarmonicInterval(previousPair[0], previousPair[1]))
			) {
				return true
			}
		}
	}

	return false
}

export default analyseBattuta
