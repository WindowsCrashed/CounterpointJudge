import { Barline, Stave, StaveText } from 'vexflow'
import { FeedbackData } from '../../models/models'
import getAllAffectedMeasures from './getAllAffectedMeasures'
import setMeasureColor from './setMeasureColor'

type Staves = {
	topStave: Stave[]
	bottomStave: Stave[]
}

const genStaves = (
	feedback: FeedbackData,
	initialX: number,
	baseWidth: number,
	baseX: number,
	clefs: { top: string; bottom: string }
): Staves => {
	const staves: Staves = { topStave: [], bottomStave: [] }
	const affectedMeasures = getAllAffectedMeasures(feedback.mistakes)

	// Create staves and measures
	for (let i = 0; i < feedback.notes.length; i++) {
		// if first measure
		if (i === 0) {
			staves.topStave.push(
				new Stave(initialX, 40, baseWidth + 50, {
					fill_style: setMeasureColor(feedback, i + 1, affectedMeasures)
				})
					.addClef(clefs.top)
					.addTimeSignature('C|')
					.addModifier(
						new StaveText(`${i + 1}`, 1, {
							shift_y: -50,
							shift_x: 120
						})
					)
			)

			staves.bottomStave.push(
				new Stave(initialX, 140, baseWidth + 50, {
					fill_style: setMeasureColor(feedback, i + 1, affectedMeasures)
				})
					.addClef(clefs.bottom)
					.addTimeSignature('C|')
			)
			// if last measure
		} else if (i === feedback.notes.length - 1) {
			staves.topStave.push(
				new Stave(baseX + baseWidth * i, 40, baseWidth, {
					fill_style: setMeasureColor(feedback, i + 1, affectedMeasures)
				})
					.setEndBarType(Barline.type.END)
					.addModifier(
						new StaveText(`${i + 1}`, 1, {
							shift_y: -50,
							shift_x: 72
						})
					)
			)

			staves.bottomStave.push(
				new Stave(baseX + baseWidth * i, 140, baseWidth, {
					fill_style: setMeasureColor(feedback, i + 1, affectedMeasures)
				}).setEndBarType(Barline.type.END)
			)
			// if other measures
		} else {
			staves.topStave.push(
				new Stave(baseX + baseWidth * i, 40, baseWidth, {
					fill_style: setMeasureColor(feedback, i + 1, affectedMeasures)
				}).addModifier(
					new StaveText(`${i + 1}`, 1, {
						shift_y: -50,
						shift_x: 72
					})
				)
			)

			staves.bottomStave.push(
				new Stave(baseX + baseWidth * i, 140, baseWidth, {
					fill_style: setMeasureColor(feedback, i + 1, affectedMeasures)
				})
			)
		}
	}

	return staves
}

export default genStaves
