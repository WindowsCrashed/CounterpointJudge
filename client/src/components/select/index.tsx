import { FC } from 'react'

type SelectProps = {
	label: string
	options: string[]
	onChange: Function
	value: string
}

const Select: FC<SelectProps> = ({ label, options, onChange, value }) => {
	return (
		<div className='flex justify-center items-center m-2'>
			<label htmlFor={`${label.toLowerCase()}-field`} className='font-bold text-lg mr-3'>
				{`${label}:`}
			</label>
			<select
				className='rounded-md border-2 border-gray-200 w-24 text-lg'
				id={`${label.toLowerCase()}-field`}
				value={value}
				onChange={e => onChange(e)}
			>
				{options.map((o, index) => (
					<option key={index} value={o}>
						{o}
					</option>
				))}
			</select>
		</div>
	)
}

export default Select
