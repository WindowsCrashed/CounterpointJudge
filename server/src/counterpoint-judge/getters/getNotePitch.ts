import { notes } from '../data/db'
import getEnharmonic from './getEnharmonic'

const getNotePitch = (label: string): number => {
	if (label.length > 3 || label.length <= 0) return 0
	let note = notes.find(n => n.label === label)?.pitch
	if (!note) {
		const enharmonicLabel = getEnharmonic(label)
		note = notes.find(n => n.label === enharmonicLabel)?.pitch
	}
	if (!note) return 0
	return note
}

export default getNotePitch
