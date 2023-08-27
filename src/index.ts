import { enharmonics, intervals, notes } from './data/db'

function calculateInterval(note1: number, note2: number): string {
	if (note1 <= 0 || note2 <= 0) return 'INVALID NOTES'

	let steps = Math.abs(note1 - note2)

	while (steps > 12) steps -= 12

	const interval = intervals.find(i => i.steps === steps)?.label ?? 'Not a valid interval'

	return interval
}

function getNoteMidi(label: string): number {
	let note = notes.find(n => n.label === label)?.midi
	if (!note) {
		const enharmonicLabel = getEnharmonic(label)
		note = notes.find(n => n.label === enharmonicLabel)?.midi
	}
	if (!note) return 0
	return note
}

function getEnharmonic(flat: string): string {
	const [noteLabel, noteNumber] = flat.split(/(?!b)/g)
	const enharmonic = enharmonics.find(e => e.flat === noteLabel)?.sharp
	if (!enharmonic) return 'INVALID NOTE'
	return `${enharmonic}${noteNumber}`
}

const note1 = getNoteMidi('Ab3')
const note2 = getNoteMidi('D4')

console.log(calculateInterval(note1, note2))
