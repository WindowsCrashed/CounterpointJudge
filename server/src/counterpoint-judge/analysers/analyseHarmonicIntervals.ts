import calculateHarmonicInterval from '../calculators/calculateHarmonicInterval'
import { Mistake } from '../models/models'
import analyseBattuta from './analyseBattuta'

const analyseHarmonicIntervals = (sequence: number[][]): Mistake[] => {
	const mistakes: Mistake[] = []
	const intervalList: number[] = []

	for (const notePair of sequence) {
		const result = calculateHarmonicInterval(notePair[0], notePair[1])
		intervalList.push(result)
	}

	if (![0, 7, 12].includes(intervalList[0])) {
		mistakes.push({
			header: 'FIRST INTERVAL MUST BE A PERFECT CONSONANCE',
			measures: [1],
			notes: sequence[0],
			weight: 1.5
		})
	}

	for (let i = 0; i < intervalList.length; i++) {
		if ([1, 2, 5, 10, 11].includes(intervalList[i])) {
			mistakes.push({
				header: 'DISSONANCE',
				measures: [i + 1],
				notes: sequence[i],
				weight: 1
			})
		} else if (intervalList[i] === 6) {
			mistakes.push({
				header: 'TRITONE',
				measures: [i + 1],
				notes: sequence[i],
				weight: 1.5
			})
		}

		if (i !== 0) {
			if (intervalList[i] === intervalList[i - 1]) {
				if (intervalList[i] === 7) {
					mistakes.push({
						header: 'PARALLEL FIFTHS',
						measures: [i, i + 1],
						notes: [sequence[i - 1], sequence[i]],
						weight: 1.5
					})
				} else if (intervalList[i] === 0) {
					mistakes.push({
						header: 'PARALLEL UNISON',
						measures: [i, i + 1],
						notes: [sequence[i - 1], sequence[i]],
						weight: 1.5
					})
				} else if (intervalList[i] === 12) {
					mistakes.push({
						header: 'PARALLEL OCTAVES',
						measures: [i, i + 1],
						notes: [sequence[i - 1], sequence[i]],
						weight: 1.5
					})
				}
			} else if ([7, 12].includes(intervalList[i])) {
				if (analyseBattuta(sequence[i - 1], sequence[i]))
					mistakes.push({
						header: 'BATTUTA',
						measures: [i, i + 1],
						notes: [sequence[i - 1], sequence[i]],
						weight: 0.5
					})
			}
		}
	}

	if (![3, 9].includes(intervalList[intervalList.length - 2])) {
		mistakes.push({
			header: 'PENULTIMATE INTERVAL MUST BE EITHER MAJOR SIXTH OR MINOR THIRD',
			measures: [intervalList.length - 1],
			notes: sequence[intervalList.length - 2],
			weight: 1.5
		})
	}

	if (![0, 7, 12].includes(intervalList[intervalList.length - 1])) {
		mistakes.push({
			header: 'LAST INTERVAL MUST BE A PERFECT CONSONANCE',
			measures: [intervalList.length],
			notes: sequence[intervalList.length - 1],
			weight: 1.5
		})
	}

	return mistakes
}

export default analyseHarmonicIntervals
