import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Container from './../components/Container'
import Input from './../components/Input'
import Button from '../components/Button'
import Loader from '../components/Loader'

const { VITE_API_URL } = import.meta.env

const EditCustomer = () => {
	const { customerId } = useParams()
	const navigate = useNavigate()
	const [loading, setLoading] = useState(true)
	const [customer, setCustomer] = useState({})

	const handleSubmit = async e => {
		e.preventDefault()
		setLoading(true)

		try {
			const body = Object.fromEntries(new FormData(e.target))
			const options = {
				method: 'PATCH',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(body)
			}
			const response = await fetch(`${VITE_API_URL}/customers/${customerId}`, options)

			if (response.ok) {
				navigate('/customers')
			}
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		(async () => {
			try {
				const options = { method: 'GET', headers: { 'Accept': 'application/json' } }
				const response = await fetch(`${VITE_API_URL}/customers/${customerId}`, options)
				if (response.ok) {
					const json = await response.json()
					setCustomer(json.data)
				}
			} catch (error) {
				console.error(error)
			} finally {
				setLoading(false)
			}
		})()
	}, [])

	if (loading) return <Loader />

	return (
		<section className='py-8'>
			<Container>
				<div className='mb-5'>
					<Link to='/customers'><h1 className='text-4xl font-semibold inline text-primary-dark'>Clientes</h1></Link>
				</div>
			</Container>
			<Container>
				<form className='flex flex-col gap-2 mx-auto max-w-xl' onSubmit={handleSubmit}>
					<h2 className='text-3xl text-center mb-4'>Actualizar cliente</h2>
					<label className='text-text-color/75 font-semibold'>
						Nombre
						<Input
							type='text'
							name='name'
							defaultValue={customer.name}
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
							defaultValue={customer.identification}
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

export default EditCustomer