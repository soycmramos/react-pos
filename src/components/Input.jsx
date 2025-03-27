import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

const Input = ({ type = 'text', name, className, ...res }) => {
	return (
		<input
			type={type}
			name={name}
			className={twMerge(clsx('block w-full py-1 px-3 border border-gray-300 outline-none rounded-md focus:border-primary', className))}
			{...res}
		/>
	)
}

export default Input