import { FeedbackData } from '../../models/models'
import getColorByWeight from '../getColorByWeight'

const setMeasureColor = (
	feedback: FeedbackData,
	currentMeasure: number,
	affectedMeasures: number[]
): string => {
	if (affectedMeasures.includes(currentMeasure)) {
		const mistakes = feedback.mistakes.filter(m => m.measures.includes(currentMeasure))
		if (mistakes) {
			const colorStyle = getColorByWeight(Math.max(...mistakes.map(m => m.weight)))
			return colorStyle.substring(5, colorStyle.lastIndexOf('-'))
		}
	}

	return 'gray'
}

export default setMeasureColor
