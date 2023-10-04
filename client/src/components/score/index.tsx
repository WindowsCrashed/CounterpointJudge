import { FC, useState } from 'react'
import './style.css'
import CountUp from 'react-countup'
import ConfettiExplosion from 'react-confetti-explosion'

type ScoreProps = {
	score: number
}

const Score: FC<ScoreProps> = ({ score }) => {
	const [color, setColor] = useState<string>('')
	const [fill, setFill] = useState<string>('')

	const [isExploding, setIsExploding] = useState(false)

	const fillScoreColor = () => {
		if (score < 40) {
			setColor('red')
		} else if (score < 80) {
			setColor('yellow')
		} else {
			setColor('green')
		}
		setFill('fill-bg')

		if (score === 100) setIsExploding(true)
	}

	return (
		<div
			className={`flex flex-col items-center justify-center p-7 pt-5 rounded-xl drop-shadow-xl fill-${color} ${fill}`}
		>
			<div className='text-white mb-2'>Score:</div>
			<div className={`text-7xl text-white ${color}`}>
				<CountUp
					start={0}
					end={score}
					duration={2.5}
					delay={0}
					decimals={1}
					onEnd={fillScoreColor}
				/>
			</div>
			{isExploding && (
				<ConfettiExplosion force={0.6} duration={2500} particleCount={80} width={1000} />
			)}
		</div>
	)
}

export default Score
