import { FC } from 'react'
import './style.css'

type ScoreProps = {
	score: number
}

const Score: FC<ScoreProps> = ({ score }) => {
	return (
		<div className='score'>
			<div className='label'>Score:</div>
			<div className='points'>{score.toFixed(1)}</div>
		</div>
	)
}

export default Score
