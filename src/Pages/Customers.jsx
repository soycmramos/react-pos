import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'
import Container from '../components/Container'
import Button from './../components/Button'
import Input from './../components/Input'
import { FaRegUser, FaEllipsis, FaPlus, } from 'react-icons/fa6'
import { useState } from 'react'

const Customers = () => {

	const [isActive, setIsActive] = useState(true)

	return (
		<section className='py-8'>
			<Container>
				<div className='mb-5'>
					<h1 className='text-4xl font-semibold'>Clientes</h1>
				</div>
				<div className='flex justify-end gap-2 mb-4'>
					<Input type='search' name='filter-customer' placeholder='Buscar...' className='inline-flex w-auto' />
					<Button variant='primary-outlined' className='inline-flex items-center gap-1'>
						<FaPlus />Crear nuevo cliente
					</Button>
				</div>
				<div className='p-4 bg-white shadow rounded'>
					<table className='table-fixed w-full mx-auto'>
						<thead>
							<tr className='border-b border-gray-300 text-gray-500'>
								<th className='p-3 w-1/4 font-normal text-left'>Nombre</th>
								<th className='p-3 w-1/4 font-normal text-center'>Estado</th>
								<th className='p-3 w-1/4 font-normal'>Acciones</th>
							</tr>
						</thead>
						<tbody>
							<tr className='border-b border-gray-300 hover:bg-gray-100 transition-colors'>
								<td className='p-3 flex items-center gap-1'>
									<FaRegUser className='size-7' />
									Carlos Mario Ramos Pérez
								</td>
								<td className='p-3 text-center'>
									<span className={twMerge(clsx('py-1 px-2 text-sm font-semibold rounded', {
										'bg-success/25 text-green-900': isActive,
										'bg-danger/25 text-red-900': !isActive,
									}))}>
										{(isActive && 'Activo') || (!isActive && 'Inactivo')}
									</span>
								</td>
								<td className='p-3'>
									<FaEllipsis className='size-7 cursor-pointer mx-auto' />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Container>
		</section>
	)
}

export default Customers