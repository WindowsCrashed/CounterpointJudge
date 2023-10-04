import { FC, PropsWithChildren } from 'react'

type ButtonProps = {
	onClick: Function
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ onClick, children }) => {
	return (
		<button
			className='bg-white text-blue-600 border-2 border-white mt-6 p-4 text-xl font-bold rounded-xl drop-shadow-lg transition-all hover:bg-[#00000023] hover:text-white active:bg-[#00000041] active:text-gray-200 active:border-gray-200'
			onClick={() => onClick()}
		>
			{children}
		</button>
	)
}

export default Button
