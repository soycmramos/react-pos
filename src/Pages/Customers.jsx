import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'
import Container from '../components/Container'
import Button from './../components/Button'
import Input from './../components/Input'
import Empty from '../components/Empty';
import Loader from '../components/Loader'
import { FaRegUser, FaEllipsis, FaPlus, FaRegTrashCan, FaRegPenToSquare } from 'react-icons/fa6'

const { VITE_API_URL } = import.meta.env

const Customers = () => {
	const [customers, setCustomers] = useState([])
	const [search, setSearch] = useState('')
	const [isLoading, setIsLoading] = useState(true)
	const [showActionsMenu, setShowActionsMenu] = useState(true)

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`${VITE_API_URL}/customers`)
				const { data } = await response.json()
				setCustomers(data)
			} catch (error) {
				console.error(error)
				return
			} finally {
				setIsLoading(false)
			}
		})()
	}, [])

	const handleChange = e => setSearch(e.target.value)

	const handleActionsMenu = () => setShowActionsMenu(!showActionsMenu)

	const results = !search
		? customers
		: customers.filter(customer => customer.name.toLowerCase().includes(search.toLowerCase()))

	if (isLoading) {
		return (
			<Loader />
		)
	}

	return (
		<section className='py-8'>
			<Container className='mb-5'>
				<Link to='/customers'><h1 className='text-4xl font-semibold inline'>Clientes</h1></Link>
			</Container>
			<Container className='flex justify-end gap-2 mb-4'>
				{
					customers.length > 0 && (
						<Input
							type='search'
							placeholder='Buscar...'
							className='inline-flex w-auto'
							value={search}
							onChange={handleChange}
						/>
					)
				}
				<Link to='/customers/new'>
					<Button variant='primary-outlined' className='inline-flex items-center gap-1'>
						<FaPlus />Crear nuevo cliente
					</Button>
				</Link>
			</Container>
			{
				!customers.length > 0
					? (
						<Empty message='No hay clientes por le momento. Comienza por crear uno.'>
							<Link to='/customers/new'>
								<Button variant='primary' className='inline-flex items-center gap-1'>
									<FaPlus />Crear nuevo cliente
								</Button>
							</Link>
						</Empty>
					)
					: (
						<Container>
							<div className='bg-white shadow rounded'>
								<table className='table-fixed w-full mx-auto'>
									<thead>
										<tr className='border-b border-gray-300 text-text-color/75'>
											<th className='p-3 w-1/4 font-normal text-left'>Nombre</th>
											<th className='p-3 w-1/4 font-normal text-center'>identificación</th>
											<th className='p-3 w-1/4 font-normal text-center'>Estado</th>
											<th className='p-3 w-1/4 font-normal'>Acciones</th>
										</tr>
									</thead>
									<tbody>
										{results.map(customer => {
											return (
												<tr className='border-b border-gray-300 hover:bg-gray-100 transition-colors' key={customer.id}>
													<td className='p-3 flex items-center gap-1'>
														<FaRegUser className='size-7' />
														{customer.name}
													</td>
													<td className='p-3 text-center'>
														{customer.identification}
													</td>
													<td className='p-3 text-center'>
														<span className={twMerge(clsx('py-1 px-2 text-sm font-semibold rounded', {
															'bg-success/25 text-green-900': true,
															'bg-danger/25 text-red-900': false,
														}))}>
															{(true && 'Activo') || (false && 'Inactivo')}
														</span>
													</td>
													<td className='p-3 flex items-center justify-center gap-4'>
														<FaRegTrashCan title='Eliminar' className='size-7 cursor-pointer transition-colors hover:text-danger' />
														<Link to={`/customers/edit/${customer.id}`}>
															<FaRegPenToSquare title='Editar' className='size-7 cursor-pointer transition-colors hover:text-info' />
														</Link>
													</td>
												</tr>
											)
										})}
									</tbody>
								</table>
							</div>
						</Container>
					)
			}
		</section >
	)
}

export default Customers