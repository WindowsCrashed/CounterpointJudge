import { Request, Response } from 'express'
import judgeCounterpoint from '../../shared/judgeCounterpoint'
import { MidiData } from '../../shared/models'

export const postJudgeCounterpoint = async (req: Request, res: Response) => {
	try {
		const data: MidiData = req.body
		const feedback = judgeCounterpoint(data)
		res.status(200).send(feedback)
	} catch (e) {
		res.status(400).send('MIDI data could not be parsed or judged. Try again.')
	}
}
