import { Link } from 'react-router-dom'
import error from '../assets/error.svg'
import Button from './Button'

const Error = () => {
	return (
		<div className='flex flex-col gap-y-4 py-12'>
			<img src={error} alt='No data' className='max-w-1/6 mx-auto' />
			<p className='text-center'>Ha ocurrido un error inesperado</p>
			<div className='flex justify-center'>
				<Link to='/'>
					<Button variant='primary-inverted'>Salir de aquí</Button>
				</Link>
			</div>
		</div>
	)
}

export default Error