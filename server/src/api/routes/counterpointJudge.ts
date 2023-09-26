import { Request, Response, Router } from 'express'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
	res.send('Hey there!')
})

router.post('/', async (req: Request, res: Response) => {
	const data = req.body

	console.log(
		`This is your data:\n  trackCount: ${data.trackCount}\n  tracks:${data.tracks[0][0].midi}`
	)
	res.status(200).send()
})

export default router
