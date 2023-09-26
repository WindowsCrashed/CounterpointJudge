import { Request, Response, Router } from 'express'
import genSequence from '../../counterpoint-judge/generators/genSequence'
import analyseSequence from '../../counterpoint-judge/analysers/analyseSequence'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
	res.send('Hey there!')
})

router.post('/', async (req: Request, res: Response) => {
	const data = req.body

	try {
		console.log(`This is your data:\n  trackCount: ${data.trackCount}\n  tracks:${data.tracks}`)
		console.log(genSequence(data))
		analyseSequence(genSequence(data))

		res.status(200).send()
	} catch (e) {
		res.status(500).send()
	}
})

export default router
