import { MistakeData } from '../../shared/models'
import getNoteLabel from '../getters/getNoteLabel'
import { Mistake } from '../models/models'

const genMistakeData = (mistakes: Mistake[]): MistakeData[] => {
	const mistakeData = []

	for (const mistake of mistakes) {
		const notes: (string | string[])[] = mistake.notes.map(note => {
			if (typeof note === 'number') {
				return getNoteLabel(note)
			}
			return note.map(subNote => getNoteLabel(subNote))
		})

		const data: MistakeData = {
			header: mistake.header,
			measures: mistake.measures,
			weight: mistake.weight,
			notes: notes
		}

		mistakeData.push(data)
	}

	return mistakeData
}

export default genMistakeData
