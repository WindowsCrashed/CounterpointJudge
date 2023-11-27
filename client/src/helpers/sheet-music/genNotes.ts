import { Accidental, StaveNote } from 'vexflow'
import { FeedbackData } from '../../models/models'
import formatNoteLabel from './formatNoteLabel'

type Notes = {
	topNotes: StaveNote[][]
	bottomNotes: StaveNote[][]
}

const genNotes = (feedback: FeedbackData, clefs: { top: string; bottom: string }): Notes => {
	const notes: Notes = { topNotes: [], bottomNotes: [] }

	// Create notes
	for (let i = 0; i < feedback.notes.length; i++) {
		// if last note pair
		if (i === feedback.notes.length - 1) {
			const newTopNote = [
				new StaveNote({
					keys: [formatNoteLabel(feedback.notes[i][1])],
					duration: '1/2',
					clef: clefs.top
				})
			]
			const newBottomNote = [
				new StaveNote({
					keys: [formatNoteLabel(feedback.notes[i][0])],
					duration: '1/2',
					clef: clefs.bottom
				})
			]

			// add accidentals
			if (['#', 'b'].includes(feedback.notes[i][1][1])) {
				newTopNote[0].addModifier(new Accidental(feedback.notes[i][1][1]))
			}

			if (['#', 'b'].includes(feedback.notes[i][0][1])) {
				newBottomNote[0].addModifier(new Accidental(feedback.notes[i][0][1]))
			}

			notes.topNotes.push(newTopNote)
			notes.bottomNotes.push(newBottomNote)
		}
		// if other note pairs
		else {
			const newTopNote = [
				new StaveNote({
					keys: [formatNoteLabel(feedback.notes[i][1])],
					duration: 'w',
					clef: clefs.top
				})
			]
			const newBottomNote = [
				new StaveNote({
					keys: [formatNoteLabel(feedback.notes[i][0])],
					duration: 'w',
					clef: clefs.bottom
				})
			]

			// add accidentals
			if (['#', 'b'].includes(feedback.notes[i][1][1])) {
				newTopNote[0].addModifier(new Accidental(feedback.notes[i][1][1]))
			}

			if (['#', 'b'].includes(feedback.notes[i][0][1])) {
				newBottomNote[0].addModifier(new Accidental(feedback.notes[i][0][1]))
			}

			notes.topNotes.push(newTopNote)
			notes.bottomNotes.push(newBottomNote)
		}
	}

	return notes
}

export default genNotes
