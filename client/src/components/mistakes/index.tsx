import { FC } from 'react'
import FadeIn from 'react-fade-in'

type MistakesProps = {
	mistakeCount: number
	mistakes: string[]
}

const Mistakes: FC<MistakesProps> = ({ mistakeCount, mistakes }) => {
	return (
		<FadeIn delay={400} transitionDuration={500}>
			<p>Mistake count: {mistakeCount}</p>
			<p>Mistakes:</p>
			<ul>
				{mistakes.map((m, index) => (
					<li key={index}>{m}</li>
				))}
			</ul>
			<div id='sm-output'></div>
		</FadeIn>
	)
}

export default Mistakes
