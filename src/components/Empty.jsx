import empty from '../assets/empty.svg'

const Empty = ({ message, children }) => {
	return (
		<div className='flex flex-col gap-y-4 p-12'>
			<img src={empty} alt='No data' className='max-w-1/6 mx-auto' />
			<p className='text-center'>{message}</p>
			<div className='flex justify-center'>
				{children}
			</div>
		</div>
	)
}

export default Empty