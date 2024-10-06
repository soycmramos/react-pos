import { Link } from 'react-router-dom'
import { FiClipboard, FiShoppingCart, FiUser } from 'react-icons/fi'

export default function Nav() {
	return (
		<nav>
			<ul className='p-2'>
				<li>
					<Link to='/orders' className='p-2 flex items-center hover:bg-[#f2f2f2] rounded font-semibold'>
						<FiClipboard className='mr-2 w-5 h-auto' />
						Órdenes
					</Link>
				</li>
				<li>
					<Link to='/products' className='p-2 flex items-center hover:bg-[#f2f2f2] rounded font-semibold'>
						<FiShoppingCart className='mr-2 w-5 h-auto' />
						Productos
					</Link>
				</li>
				<li>
					<Link to='/customers' className='p-2 flex items-center hover:bg-[#f2f2f2] rounded font-semibold'>
						<FiUser className='mr-2 w-5 h-auto' />
						Clientes
					</Link>
				</li>
			</ul>
		</nav>
	)
}
