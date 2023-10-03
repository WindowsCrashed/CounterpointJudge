import { FC, useState } from 'react'
import './style.css'
import CountUp from 'react-countup'

type ScoreProps = {
	score: number
}

const Score: FC<ScoreProps> = ({ score }) => {
	const [color, setColor] = useState<string>('')

	const setScoreColor = () => {
		if (score < 40) {
			setColor('red')
		} else if (score < 80) {
			setColor('yellow')
		} else {
			setColor('green')
		}
	}

	return (
		<div className='score'>
			<div className='label'>Score:</div>
			<div className={`points ${color}`}>
				<CountUp
					start={0}
					end={score}
					duration={2.5}
					delay={0}
					decimals={1}
					onStart={setScoreColor}
				/>
			</div>
		</div>
	)
}

export default Score
