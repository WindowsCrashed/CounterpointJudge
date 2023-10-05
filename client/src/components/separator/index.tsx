import { FC } from 'react'

type SeparatorProps = {
	label: string
}

const Separator: FC<SeparatorProps> = ({ label }) => {
	return (
		<div className='flex items-center justify-center my-4'>
			<div
				className='bg-gray-400 w-28 rounded-xl'
				style={{
					height: 2
				}}
			></div>
			<span className='mx-3 font-bold text-xl'>{label.toUpperCase()}</span>
			<div
				className='bg-gray-400 w-28 rounded-xl'
				style={{
					height: 2
				}}
			></div>
		</div>
	)
}

export default Separator
