import calculateMelodicInterval from '../calculators/calculateMelodicInterval'
import { Mistake } from '../models/models'

const analyseMelodicIntervals = (sequence: number[][]): Mistake[] => {
	const mistakes: Mistake[] = []
	const lines: number[][] = [[], []]

	sequence.forEach(pair => {
		lines[0].push(pair[0])
		lines[1].push(pair[1])
	})

	for (const line of lines) {
		const intervalList = []

		for (let i = 1; i < line.length; i++) {
			const result = calculateMelodicInterval(line[i - 1], line[i])
			intervalList.push(result)
		}

		// console.log(intervalList.map(i => i.label).join(' -> '))

		for (let i = 0; i < intervalList.length; i++) {
			if (intervalList[i].steps === 13) {
				mistakes.push({
					header: 'INTERVAL BIGGER THAN AN OCTAVE',
					measures: [i + 1, i + 2],
					notes: [line[i], line[i + 1]],
					weight: 1.5
				})
			} else if (intervalList[i].steps === 6) {
				mistakes.push({
					header: 'TRITONE',
					measures: [i + 1, i + 2],
					notes: [line[i], line[i + 1]],
					weight: 1.5
				})
			} else if (intervalList[i].steps === 9) {
				mistakes.push({
					header: 'MAJOR SIXTH INTERVAL',
					measures: [i + 1, i + 2],
					notes: [line[i], line[i + 1]],
					weight: 1
				})
			} else if ([10, 11].includes(intervalList[i].steps)) {
				mistakes.push({
					header: 'SEVENTH INTERVAL',
					measures: [i + 1, i + 2],
					notes: [line[i], line[i + 1]],
					weight: 1
				})
			}
		}
	}

	return mistakes
}

export default analyseMelodicIntervals
