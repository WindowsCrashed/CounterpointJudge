import { Router } from 'express'
import { postJudgeCounterpoint } from '../controllers/counterpointJudge'

const router = Router()

router.post('/', postJudgeCounterpoint)

export default router
