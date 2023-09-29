import {
	Accidental,
	Barline,
	Formatter,
	Renderer,
	Stave,
	StaveConnector,
	StaveNote,
	StaveText
} from 'vexflow'
import { FeedbackData } from '../models/models'

type Staves = {
	topStave: Stave[]
	bottomStave: Stave[]
}

type Notes = {
	topNotes: StaveNote[][]
	bottomNotes: StaveNote[][]
}

const formatNoteLabel = (label: string): string => {
	const note = label.substring(0, label.length - 1).toLowerCase()
	const number = label[label.length - 1]
	const formatedLabel = `${note}/${number}`
	return formatedLabel
}

const genStaves = (
	feedback: FeedbackData,
	initialX: number,
	baseWidth: number,
	baseX: number
): Staves => {
	const staves: Staves = { topStave: [], bottomStave: [] }

	// Create staves and measures
	for (let i = 0; i < feedback.notes.length; i++) {
		// if first measure
		if (i === 0) {
			staves.topStave.push(
				new Stave(initialX, 40, baseWidth + 50)
					.addClef('treble')
					.addTimeSignature('C|')
					.addModifier(
						new StaveText(`${i + 1}`, 1, {
							shift_y: -50,
							shift_x: 120
						})
					)
			)

			staves.bottomStave.push(
				new Stave(initialX, 140, baseWidth + 50).addClef('treble').addTimeSignature('C|')
			)
			// if last measure
		} else if (i === feedback.notes.length - 1) {
			staves.topStave.push(
				new Stave(baseX + baseWidth * i, 40, baseWidth)
					.setEndBarType(Barline.type.END)
					.addModifier(
						new StaveText(`${i + 1}`, 1, {
							shift_y: -50,
							shift_x: 72
						})
					)
			)

			staves.bottomStave.push(
				new Stave(baseX + baseWidth * i, 140, baseWidth).setEndBarType(Barline.type.END)
			)
			// if other measures
		} else {
			staves.topStave.push(
				new Stave(baseX + baseWidth * i, 40, baseWidth).addModifier(
					new StaveText(`${i + 1}`, 1, {
						shift_y: -50,
						shift_x: 72
					})
				)
			)

			staves.bottomStave.push(new Stave(baseX + baseWidth * i, 140, baseWidth))
		}
	}

	return staves
}

const genNotes = (feedback: FeedbackData): Notes => {
	const notes: Notes = { topNotes: [], bottomNotes: [] }

	// Create notes
	for (let i = 0; i < feedback.notes.length; i++) {
		// if last note pair
		if (i === feedback.notes.length - 1) {
			const newTopNote = [
				new StaveNote({
					keys: [formatNoteLabel(feedback.notes[i][1])],
					duration: '1/2'
				})
			]
			const newBottomNote = [
				new StaveNote({
					keys: [formatNoteLabel(feedback.notes[i][0])],
					duration: '1/2'
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
				new StaveNote({ keys: [formatNoteLabel(feedback.notes[i][1])], duration: 'w' })
			]
			const newBottomNote = [
				new StaveNote({ keys: [formatNoteLabel(feedback.notes[i][0])], duration: 'w' })
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

const genSheetMusic = (outputElementId: string, feedback: FeedbackData) => {
	const renderer = new Renderer(outputElementId, Renderer.Backends.SVG)

	renderer.resize(feedback.notes.length * 88, 300) // calculates with based on number of measures
	const context = renderer.getContext()

	const initialX = 10
	const baseX = initialX + 50
	const baseWidth = 80

	const staves = genStaves(feedback, initialX, baseWidth, baseX)

	staves.topStave.forEach(s => s.setContext(context).draw())
	staves.bottomStave.forEach(s => s.setContext(context).draw())

	// Create notes
	const notes = genNotes(feedback)

	const brace = new StaveConnector(staves.topStave[0], staves.bottomStave[0])
	brace.setType(StaveConnector.type.BRACKET)
	brace.setContext(context).draw()

	for (let i = 0; i < staves.topStave.length; i++) {
		Formatter.FormatAndDraw(context, staves.topStave[i], notes.topNotes[i])
	}

	for (let i = 0; i < staves.topStave.length; i++) {
		Formatter.FormatAndDraw(context, staves.bottomStave[i], notes.bottomNotes[i])
	}
}

export default genSheetMusic
