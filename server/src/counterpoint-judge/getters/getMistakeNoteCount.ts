import { Mistake } from '../models/models'

const getMistakeNoteCount = (mistake: Mistake): number => {
	if (typeof mistake.notes[0] === 'number' && typeof mistake.notes[1] === 'number') {
		return 2
	} else {
		return 4
	}
}

export default getMistakeNoteCount
