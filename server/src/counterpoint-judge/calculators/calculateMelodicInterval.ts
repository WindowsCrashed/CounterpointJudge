import { intervals } from '../data/db'
import { Interval } from '../models/models'

const calculateMelodicInterval = (note1: number, note2: number): Interval => {
	if (note1 <= 0 || note2 <= 0) return { label: 'INVALID INTERVAL', steps: -1 }

	const steps = Math.abs(note1 - note2)

	if (steps > 12) return { label: 'BIGGER THAN OCTAVE', steps: 13 }

	const interval = intervals.find(i => i.steps === steps) ?? {
		label: 'INVALID INTERVAL',
		steps: -1
	}

	return interval
}

export default calculateMelodicInterval
