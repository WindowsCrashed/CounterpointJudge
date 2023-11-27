import { Formatter, Renderer, StaveConnector } from 'vexflow'
import { FeedbackData, TrackVoices } from '../../models/models'
import setClef from './setClef'
import genStaves from './genStaves'
import genNotes from './genNotes'

const genSheetMusic = (
	outputElementId: string,
	feedback: FeedbackData,
	trackVoices: TrackVoices
) => {
	const renderer = new Renderer(outputElementId, Renderer.Backends.SVG)
	const clefs = { top: setClef(trackVoices.firstTrack), bottom: setClef(trackVoices.secondTrack) }

	renderer.resize(feedback.notes.length * 71, 240) // calculates with based on number of measures
	const context = renderer.getContext()

	context.scale(0.8, 0.8)

	const initialX = 10
	const baseX = initialX + 50
	const baseWidth = 80

	const staves = genStaves(feedback, initialX, baseWidth, baseX, clefs)

	staves.topStave.forEach(s => s.setContext(context).draw())
	staves.bottomStave.forEach(s => s.setContext(context).draw())

	// Create notes
	const notes = genNotes(feedback, clefs)

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
