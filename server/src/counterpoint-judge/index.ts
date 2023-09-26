import { motions } from './data/db'
import { getNoteMidi } from './getters'
import { calculateHarmonicInterval, calculateMelodicInterval } from './intervals'

function analyseHarmonicIntervals(sequence: Array<string[]>) {
	console.log('------- HARMONY ------')

	const intervalList = []
	for (const notePair of sequence) {
		const result = calculateHarmonicInterval(getNoteMidi(notePair[0]), getNoteMidi(notePair[1]))
		intervalList.push(result)
	}

	console.log(intervalList.map(i => i.label).join(' -> '))

	for (let i = 0; i < intervalList.length; i++) {
		if ([1, 2, 5, 6, 10, 11].includes(intervalList[i].steps)) {
			console.log('DISSONANCE')
		}

		if (i !== 0) {
			if (intervalList[i].steps === intervalList[i - 1].steps) {
				if (intervalList[i].steps === 7) {
					console.log('PARALLEL FIFTHS')
				} else if (intervalList[i].steps === 0) {
					console.log('PARALLEL UNISON')
				} else if (intervalList[i].steps === 12) {
					console.log('PARALLEL OCTAVES')
				}
			}
		}
	}
}

function analyseMelodicIntervals(sequence: Array<string[]>) {
	console.log('------- MELODY ------')

	const lines: Array<string[]> = [[], []]

	for (const pair of sequence) {
		lines[0].push(pair[0])
		lines[1].push(pair[1])
	}

	for (const line of lines) {
		const intervalList = []
		for (let i = 1; i < line.length; i++) {
			const result = calculateMelodicInterval(getNoteMidi(line[i - 1]), getNoteMidi(line[i]))
			intervalList.push(result)
		}

		console.log(intervalList.map(i => i.label).join(' -> '))

		for (let i = 0; i < intervalList.length; i++) {
			if (intervalList[i].steps === 13) {
				console.log('INTERVAL BIGGER THAN OCTAVE')
			} else if (intervalList[i].steps === 6) {
				console.log('TRITONE')
			} else if (intervalList[i].steps === 10 || intervalList[i].steps === 11) {
				console.log('SEVENTH INTERVAL')
			} else if (intervalList[i].steps === 9) {
				console.log('MAJOR SIXTH INTERVAL')
			}
		}
	}
}

function analyseMotion(sequence: Array<string[]>) {
	console.log('------- MOTION ------')

	const motionList = []

	for (let i = 1; i < sequence.length; i++) {
		const lowerDiff = getNoteMidi(sequence[i][0]) - getNoteMidi(sequence[i - 1][0])
		const upperDiff = getNoteMidi(sequence[i][1]) - getNoteMidi(sequence[i - 1][1])

		if ((lowerDiff > 0 && upperDiff > 0) || (lowerDiff < 0 && upperDiff < 0)) {
			motionList.push(motions.find(m => m.code === 1))
		} else if ((lowerDiff > 0 && upperDiff < 0) || (lowerDiff < 0 && upperDiff > 0)) {
			motionList.push(motions.find(m => m.code === -1))
		} else if ((lowerDiff !== 0 && upperDiff === 0) || (lowerDiff === 0 && upperDiff !== 0)) {
			motionList.push(motions.find(m => m.code === 0))
		} else {
			motionList.push(motions.find(m => m.code === -2))
		}
	}

	console.log(motionList.map(i => i?.label).join(' -> '))

	for (let i = 0; i < motionList.length; i++) {
		const harmonicInterval = calculateHarmonicInterval(
			getNoteMidi(sequence[i + 1][0]),
			getNoteMidi(sequence[i + 1][1])
		)
		if (motionList[i]?.code === 1 && [0, 7, 12].includes(harmonicInterval.steps)) {
			console.log('DIRECT PERFECT CONSONANCE')
		}
	}
}

function analyseSequence(sequence: Array<string[]>) {
	analyseHarmonicIntervals(sequence)
	analyseMelodicIntervals(sequence)
	analyseMotion(sequence)
}

const testNotes = [
	['C4', 'G4'],
	['E4', 'G4'],
	['A3', 'C4'],
	['E5', 'F5'],
	['D3', 'F#3'],
	['Eb4', 'Bb4'],
	['C#3', 'C4'],
	['F4', 'Eb5'],
	['B4', 'D#6'],
	['D5', 'A5'],
	['G#4', 'B4'],
	['Bb3', 'C4'],
	['A2', 'F#3'],
	['B4', 'C5'],
	['Eb2', 'C3'],
	['G4', 'C5'],
	['C4', 'G#4'],
	['F3', 'B3']
]

const testNotes2 = [
	['B4', 'C5'],
	['Eb2', 'C3'],
	['G4', 'D5'],
	['F4', 'C5'],
	['F3', 'B3']
]

const testNotes3 = [
	['B4', 'C5'],
	['Eb2', 'D#3'],
	['G4', 'G5'],
	['F4', 'C5'],
	['F3', 'B3']
]

const testNotes4 = [
	['B4', 'C5'],
	['Eb2', 'D#3'],
	['G4', 'G5'],
	['F4', 'F4'],
	['G4', 'G4']
]

const testNotesFux1 = [
	['D4', 'A4'],
	['F4', 'A4'],
	['E4', 'G4'],
	['D4', 'A4'],
	['G4', 'B4'],
	['F4', 'C5'],
	['A4', 'C5'],
	['G4', 'B4'],
	['F4', 'D5'],
	['E4', 'C#5'],
	['D4', 'D5']
]

const testNotesFux2 = [
	['G3', 'D4'],
	['D4', 'F4'],
	['A3', 'E4'],
	['F3', 'D4'],
	['E3', 'G4'],
	['D3', 'F4'],
	['F3', 'A4'],
	['C4', 'G4'],
	['D4', 'F4'],
	['C#4', 'E4'],
	['D4', 'D4']
]

// analyseSequence(testNotes)
// analyseSequence(testNotes2)
// analyseSequence(testNotes3)
// analyseSequence(testNotes4)
analyseSequence(testNotesFux1)
console.log('')
analyseSequence(testNotesFux2)
