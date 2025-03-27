import Container from './../components/Container'
import Input from './../components/Input'
import Button from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'

const { VITE_API_URL } = import.meta.env

const AddNewCustomer = () => {
	const navigate = useNavigate()

	const handleSubmit = async e => {
		e.preventDefault()
		const body = Object.fromEntries(new FormData(e.target))

		try {
			const options = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
				body: JSON.stringify(body)
			}
			const response = await fetch(`${VITE_API_URL}/customers`, options)

			if (!response.ok) {
				return (
					<h1>Hubo un error</h1>
				)
			}

			navigate('/customers')
		} catch (error) {
			console.error(error)
			return
		}
	}

	return (
		<section className='py-8'>
			<Container>
				<div className='mb-5'>
				<Link to='/customers'><h1 className='text-4xl font-semibold'>Clientes</h1></Link>
				</div>
			</Container>
			<Container>
				<form className='flex flex-col gap-2 mx-auto max-w-xl' onSubmit={handleSubmit}>
					<h2 className='text-3xl text-center mb-4'>Crear nuevo cliente</h2>
					<label className='text-text-color/75 font-semibold'>
						Nombre
						<Input
							type='text'
							name='name'
							required
							placeholder='Ingresa el nombre del cliente'
							autoComplete='off'
							autoFocus
							className='font-normal'
						/>
					</label>
					<label className='text-text-color/75 font-semibold'>
						Identificación
						<Input
							type='text'
							name='identification'
							required
							placeholder='Ingresa la identificación del cliente'
							autoComplete='off'
							className='font-normal'
						/>
					</label>
					<Button variant='primary'>Enviar</Button>
				</form>
			</Container>
		</section>
	)
}

export default AddNewCustomer