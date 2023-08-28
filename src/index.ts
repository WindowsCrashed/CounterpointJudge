import { enharmonics, intervals, notes } from './data/db'
import { Interval } from './models/models'

function calculateInterval(note1: number, note2: number): Interval {
	if (note1 <= 0 || note2 <= 0) return { label: 'INVALID INTERVAL', steps: -1 }
	let steps = Math.abs(note1 - note2)
	while (steps > 12) steps -= 12
	const interval = intervals.find(i => i.steps === steps) ?? {
		label: 'INVALID INTERVAL',
		steps: -1
	}
	return interval
}

function getNoteMidi(label: string): number {
	if (label.length > 3 || label.length <= 0) return 0
	let note = notes.find(n => n.label === label)?.midi
	if (!note) {
		const enharmonicLabel = getEnharmonic(label)
		note = notes.find(n => n.label === enharmonicLabel)?.midi
	}
	if (!note) return 0
	return note
}

function getEnharmonic(flat: string): string {
	if (flat.length > 3 || flat.length <= 0) return 'INVALID NOTE'
	const [noteLabel, noteNumber] = flat.split(/(?!b)/g)
	const enharmonic = enharmonics.find(e => e.flat === noteLabel)?.sharp
	if (!enharmonic) return 'INVALID NOTE'
	return `${enharmonic}${noteNumber}`
}

function analyseSequence(sequence: Array<string[]>) {
	const intervalList = []
	for (const notePair of sequence) {
		const result = calculateInterval(getNoteMidi(notePair[0]), getNoteMidi(notePair[1]))
		intervalList.push(result)
	}

	console.log(intervalList.map(i => i.label).join(' -> '))

	for (let i = 0; i < intervalList.length; i++) {
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

analyseSequence(testNotes)
analyseSequence(testNotes2)
analyseSequence(testNotes3)
analyseSequence(testNotes4)
