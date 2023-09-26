import { Request, Response, Router } from 'express'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
	res.send('Hey there!')
})

router.post('/', async (req: Request, res: Response) => {
	const data = req.body

	res.send(`This is your data:\n  trackCount: ${data.trackCount}\n  tracks:${data.tracks}`)
})

export default router
