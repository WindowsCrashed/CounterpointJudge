import getNoteLabel from '../getters/getNoteLabel'
import { Mistake } from '../models/models'

const displayMistake = (mistake: Mistake): string => {
	if (mistake.measures.length <= 1) {
		return `${mistake.header} in measure ${mistake.measures[0]}, between notes ${getNoteLabel(
			mistake.notes[0] as number
		)} and ${getNoteLabel(mistake.notes[1] as number)}`
	} else if (typeof mistake.notes[0] === 'number' && typeof mistake.notes[1] === 'number') {
		return `${mistake.header} between measures ${mistake.measures[0]} and ${
			mistake.measures[1]
		}, between notes ${getNoteLabel(mistake.notes[0] as number)} and ${getNoteLabel(
			mistake.notes[1] as number
		)}`
	}

	return `${mistake.header} between measures ${mistake.measures[0]} and ${
		mistake.measures[1]
	}, between note pairs '${getNoteLabel((mistake.notes[0] as number[])[0])} ${getNoteLabel(
		(mistake.notes[0] as number[])[1]
	)}' and '${getNoteLabel((mistake.notes[1] as number[])[0])} ${getNoteLabel(
		(mistake.notes[1] as number[])[1]
	)}'`
}

export default displayMistake
