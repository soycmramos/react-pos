import { FiUser, FiCalendar } from 'react-icons/fi'

export default function Orders() {
	document.title = 'Orders'

	const date = new Date().toLocaleDateString('es-ES', {
		// weekday: 'short',
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		hour12: true
	})

	const arr = [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0]

	return (
		<section className='p-6 bg-white h-full'>
			<h2 className='text-4xl font-bold pb-6'>Órdenes</h2>
			<div className='rounded-xl border border-gray-300'>
				<table className='p-6 w-full text-left'>
					<thead>
						<tr>
							<th className='p-4 border-gray-300 font-semibold'>Cliente</th>
							<th className='p-4 border-gray-300 font-semibold'>Fecha</th>
							<th className='p-4 border-gray-300 font-semibold text-center'>Total</th>
							<th className='p-4 border-gray-300 font-semibold text-center'>Estado</th>
							<th className='p-4 border-gray-300 font-semibold'></th>
						</tr>
					</thead>
					<tbody>
						{
							arr.map((x, i) => {
								i++
								const color = x === 0 ? 'green' : 'red'
								const content = x === 0 ? 'Cancelado' : 'Sin cancelar'
								return (
									<tr className='odd:bg-gray-50' key={Math.random()}>
										<td className='p-4 border-y border-gray-300'>
											<FiUser className='mr-1 mb-1 w-5 h-auto inline-block' />
											<span>
												Carlos Mario Ramos Pérez
											</span>
										</td>
										<td className='p-4 border-y border-gray-300'>
											<FiCalendar className='mr-1 mb-1 w-5 h-auto inline-block' />
											<span>
												{date}
											</span>
										</td>
										<td className='p-4 border-y border-gray-300 text-center'>$ {i * 3500}</td>
										<td className='p-4 border-y border-gray-300 text-center'>
											<span className={`font-semibold py-1 px-2 text-sm bg-${color}-500/10 text-${color}-600 border border-${color}-200 rounded`}>
												{content}
											</span>
										</td>
										<td className='p-4 border-y border-gray-300 text-center'>Editar</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</div>
		</section>
	)
}
