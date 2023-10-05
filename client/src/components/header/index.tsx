import { FC } from 'react'

type HeaderProps = {
	page: 'input' | 'output'
}

const Header: FC<HeaderProps> = ({ page }) => {
	const getTitleSize = (): string => {
		if (page === 'input') return 'text-5xl my-28'
		return 'text-3xl my-10'
	}

	return (
		<div
			className={`text-white font-extrabold drop-shadow-lg transition-all ease-out duration-500 ${getTitleSize()}`}
		>
			🎼 ONLINE COUNTERPOINT JUDGE 🎼
		</div>
	)
}

export default Header
