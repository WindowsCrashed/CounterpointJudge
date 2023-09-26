import { intervals } from '../data/db'
import { Interval } from '../models/models'

const calculateHarmonicInterval = (note1: number, note2: number): Interval => {
	if (note1 <= 0 || note2 <= 0) return { label: 'INVALID INTERVAL', steps: -1 }

	let steps = Math.abs(note1 - note2)

	while (steps > 12) steps -= 12

	const interval = intervals.find(i => i.steps === steps) ?? {
		label: 'INVALID INTERVAL',
		steps: -1
	}

	return interval
}

export default calculateHarmonicInterval
