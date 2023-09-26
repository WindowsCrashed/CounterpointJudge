import { Request, Response, Router } from 'express'
import genSequence from '../../counterpoint-judge/generators/genSequence'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
	res.send('Hey there!')
})

router.post('/', async (req: Request, res: Response) => {
	const data = req.body

	console.log(`This is your data:\n  trackCount: ${data.trackCount}\n  tracks:${data.tracks}`)
	console.log(genSequence(data))
	res.status(200).send()
})

export default router
