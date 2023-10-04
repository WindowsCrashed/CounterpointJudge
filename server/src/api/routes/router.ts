import { Express } from 'express'
import counterpointJudge from './counterpointJudge'

export default (app: Express): void => {
	app.use('/counterpoint-judge', counterpointJudge)
}
