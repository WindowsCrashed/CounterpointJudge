import { motions } from '../data/db'
import { Motion } from '../models/models'

const calculateMotion = (previousPair: number[], currentPair: number[]): Motion => {
	const lowerDiff = currentPair[0] - previousPair[0]
	const upperDiff = currentPair[1] - previousPair[1]

	if ((lowerDiff > 0 && upperDiff > 0) || (lowerDiff < 0 && upperDiff < 0)) {
		return motions.find(m => m.code === 1) as Motion
	} else if ((lowerDiff > 0 && upperDiff < 0) || (lowerDiff < 0 && upperDiff > 0)) {
		return motions.find(m => m.code === -1) as Motion
	} else if ((lowerDiff !== 0 && upperDiff === 0) || (lowerDiff === 0 && upperDiff !== 0)) {
		return motions.find(m => m.code === 0) as Motion
	} else {
		return motions.find(m => m.code === -2) as Motion
	}
}

export default calculateMotion
