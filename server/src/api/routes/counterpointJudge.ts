import { Request, Response, Router } from 'express'
import { postJudgeCounterpoint } from '../controllers/counterpointJudge'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
	res.send('Connection estabilished')
})

router.post('/', postJudgeCounterpoint)

export default router
