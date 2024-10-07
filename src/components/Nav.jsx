import { Link, useLocation } from 'react-router-dom'
import { FiClipboard, FiShoppingCart, FiUser } from 'react-icons/fi'

export default function Nav() {
	const { pathname } = useLocation()

	return (
		<nav>
			<ul className='p-2 flex flex-col gap-1'>
				<li>
					<Link
						to='/orders'
						className={`p-2 flex items-center hover:bg-[#f2f2f2] rounded font-semibold ${pathname == '/orders' ? 'text-blue-500 bg-[#f2f2f2]' : ''}`}
					>
						<FiClipboard className='mr-2 w-5 h-auto' />
						Órdenes
					</Link>
				</li>
				<li>
					<Link
						to='/products'
						className={`p-2 flex items-center hover:bg-[#f2f2f2] rounded font-semibold ${pathname == '/products' ? 'text-blue-500 bg-[#f2f2f2]' : ''}`}
					>
						<FiShoppingCart className='mr-2 w-5 h-auto' />
						Productos
					</Link>
				</li>
				<li>
					<Link
						to='/customers'
						className={`p-2 flex items-center hover:bg-[#f2f2f2] rounded font-semibold ${pathname == '/customers' ? 'text-blue-500 bg-[#f2f2f2]' : ''}`}
					>
						<FiUser className='mr-2 w-5 h-auto' />
						Clientes
					</Link>
				</li>
			</ul>
		</nav>
	)
}
