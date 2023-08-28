import { enharmonics, notes } from './data/db'

export function getNoteMidi(label: string): number {
	if (label.length > 3 || label.length <= 0) return 0
	let note = notes.find(n => n.label === label)?.midi
	if (!note) {
		const enharmonicLabel = getEnharmonic(label)
		note = notes.find(n => n.label === enharmonicLabel)?.midi
	}
	if (!note) return 0
	return note
}

export function getEnharmonic(flat: string): string {
	if (flat.length > 3 || flat.length <= 0) return 'INVALID NOTE'
	const [noteLabel, noteNumber] = flat.split(/(?!b)/g)
	const enharmonic = enharmonics.find(e => e.flat === noteLabel)?.sharp
	if (!enharmonic) return 'INVALID NOTE'
	return `${enharmonic}${noteNumber}`
}
