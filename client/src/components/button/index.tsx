import { FC, PropsWithChildren } from 'react'

type ButtonProps = {
	onClick: Function
	reverse?: boolean
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ onClick, reverse, children }) => {
	const getButtonColors = (): string => {
		if (reverse)
			return 'bg-blue-500 text-white border-blue-500 hover:bg-[#00000023] hover:text-white active:bg-[#00000041] active:text-gray-200 active:border-gray-200'
		return 'bg-white text-blue-500 border-white hover:bg-[#00000023] hover:text-white active:bg-[#00000041] active:text-gray-200 active:border-gray-200'
	}

	return (
		<button
			className={`border-2 mt-6 p-4 text-xl font-bold rounded-xl drop-shadow-lg transition-all ${getButtonColors()}`}
			onClick={() => onClick()}
		>
			{children}
		</button>
	)
}

export default Button
