import { Request, Response } from 'express'
import judgeCounterpoint from '../../shared/judgeCounterpoint'
import { MidiData } from '../../shared/models'

export const postJudgeCounterpoint = async (req: Request, res: Response) => {
	const data: MidiData = req.body

	try {
		const feedback = judgeCounterpoint(data)
		res.status(200).send(feedback)
	} catch (e) {
		res.status(500).send()
	}
}
