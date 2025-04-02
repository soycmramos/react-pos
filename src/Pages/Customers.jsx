import { useState } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'
import useFetch from '../hooks/useFetch.js'
import Container from '../components/Container'
import Button from './../components/Button'
import Input from './../components/Input'
import Empty from '../components/Empty'
import Error from './../components/Error'
import Loader from '../components/Loader'
import Modal from './../components/Modal'
import { FaRegUser, FaPlus, FaRegTrashCan, FaRegPenToSquare } from 'react-icons/fa6'
import { BsExclamationTriangle, BsBan } from 'react-icons/bs'

const { VITE_API_URL } = import.meta.env

const Customers = () => {
	const [search, setSearch] = useState('')
	const [showModal, setShowModal] = useState(false)

	const handleModal = () => setShowModal(!showModal)
	const handleChange = e => setSearch(e.target.value)

	const options = { method: 'GET', headers: { 'Accept': 'application/json' } }
	const { loading, data: customers, error } = useFetch({ url: `${VITE_API_URL}/customers`, options })

	const results = !search
		? customers
		: customers.filter(customer => customer.name.toLowerCase().includes(search.toLowerCase()))

	if (loading) return <Loader />

	return (
		<Container>
			<section className='py-8'>
				<Link to='/customers' className='mb-5 text-4xl font-semibold inline-block'>
					<h1>Clientes</h1>
				</Link>
				{
					!error && customers.length > 0 && (
						<div className='flex justify-end gap-x-2'>
							<Input
								type='search'
								placeholder='Buscar...'
								className='inline-flex w-auto'
								value={search}
								onChange={handleChange}
							/>
							<Link to='/customers/new'>
								<Button variant='primary-outlined' className='inline-flex items-center gap-1'>
									<FaPlus />Crear nuevo cliente
								</Button>
							</Link>
						</div>
					)
				}
			</section>
			<section>
				{error && <Error />}
				{
					!error && !customers.length > 0 && (
						<Empty message='No hay clientes por le momento. Comienza por crear uno.'>
							<Link to='/customers/new'>
								<Button variant='primary' className='inline-flex items-center gap-1'>
									<FaPlus />Crear nuevo cliente
								</Button>
							</Link>
						</Empty>
					)
				}
				{
					!error && customers.length > 0 && (
						<table className='table-fixed w-full mx-auto bg-white shadow rounded'>
							<thead>
								<tr className='border-b border-gray-300 text-text-color/75'>
									<th className='p-3 w-1/4 font-normal text-center'>Nombre</th>
									<th className='p-3 w-1/4 font-normal text-center'>identificación</th>
									<th className='p-3 w-1/4 font-normal text-center'>Estado</th>
									<th className='p-3 w-1/4 font-normal text-center'>Acciones</th>
								</tr>
							</thead>
							<tbody>
								{results?.map(customer => {
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
												<Button className='p-0 outline-none' onClick={handleModal}>
													<FaRegTrashCan title='Eliminar' className='size-7 cursor-pointer transition-colors text-text-color/75 hover:text-danger' />
												</Button>
												<Link to={`/customers/edit/${customer.id}`}>
													<FaRegPenToSquare title='Editar' className='size-7 cursor-pointer transition-colors text-text-color/75 hover:text-info' />
												</Link>
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					)
				}
			</section>
			{
				showModal && (
					<Modal showModal={showModal} handleModal={handleModal}>
						<BsExclamationTriangle className='size-24' />
						<h1 className='text-primary text-2xl font-semibold text-center mb-1'>Eliminar cliente</h1>
						<p className='text-center text-text-color/75'>¿Estás seguro de que deseas eliminar este cliente?</p>
						<p className='text-center text-text-color/75 mb-4'>Esta acción no se puede deshacer</p>
						<div className='flex justify-center gap-x-12 w-full'>
							<Button className='flex items-center gap-x-1' onClick={handleModal}>
								<BsBan className='size-5' />
								No, cancelar
							</Button>
							<Button variant='danger-inverted' className='flex items-center gap-x-1'>
								<FaRegTrashCan className='size-5' />
								Sí, eliminar
							</Button>
						</div>
					</Modal>
				)
			}
		</Container >
	)
}


export default Customers