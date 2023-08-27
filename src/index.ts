import { intervals } from './data/db'

function calculateInterval(note1: number, note2: number): string {
	const topNote = Math.max(note1, note2)
	const bottomNote = Math.min(note1, note2)

	let steps = Math.abs(topNote - bottomNote)

	while (steps > 12) steps -= 12

	const interval = intervals.find(i => i.steps === steps)?.label ?? 'Not a valid interval'

	return interval
}

const note1 = 89
const note2 = 79

console.log(calculateInterval(note1, note2))
