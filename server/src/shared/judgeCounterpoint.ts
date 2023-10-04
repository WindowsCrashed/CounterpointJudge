import analyseSequence from '../counterpoint-judge/analysers/analyseSequence'
import genSequence from '../counterpoint-judge/generators/genSequence'
import { FeedbackData, MidiData } from './models'

const judgeCounterpoint = (data: MidiData): FeedbackData => {
	const sequence = genSequence(data)
	const feedback = analyseSequence(sequence, data.mode)

	return feedback
}

export default judgeCounterpoint
