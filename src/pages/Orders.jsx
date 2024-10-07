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

	const arr = [0, 1, 0, 1, 1, 0, 1, 0]
	arr.length = 5

	return (
		<section className='p-6'>
			<h2 className='text-4xl font-bold pb-4'>Órdenes</h2>
			<div className='bg-white p-4 shadow-md'>
				<table className='bg-white p-6 w-full text-left'>
					<thead>
						<tr>
							<th className='py-3 border-gray-300 font-semibold'>Cliente</th>
							<th className='py-3 border-gray-300 font-semibold'>Fecha</th>
							<th className='py-3 border-gray-300 font-semibold text-center'>Total</th>
							<th className='py-3 border-gray-300 font-semibold text-center'>Estado</th>
							<th className='py-3 border-gray-300 font-semibold'></th>
						</tr>
					</thead>
					<tbody>
						{
							arr.map(x => {
								const color = x === 0 ? 'green' : 'red'
								const content = x === 0 ? 'Cancelado' : 'Sin cancelar'
								return (
									<tr className='odd:bg-gray-100' key={Math.random()}>
										<td className='py-3 border-y border-gray-300 flex items-center'>Carlos Mario Ramos Pérez</td>
										<td className='py-3 border-y border-gray-300'>{date}</td>
										<td className='py-3 border-y border-gray-300 text-center'>$ 5.000</td>
										<td className='py-3 border-y border-gray-300 text-center'>
											<span
												className={`font-semibold py-1 px-2 text-sm bg-${color}-500/10 text-${color}-600 border border-${color}-200 rounded`}>
												{content}
											</span>
										</td>
										<td className='py-3 border-y border-gray-300 text-center'>Editar</td>
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
