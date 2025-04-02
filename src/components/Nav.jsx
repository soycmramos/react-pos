import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'
import { FaRegUser } from 'react-icons/fa6'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { PiCallBell } from 'react-icons/pi'
import { useLocation } from 'react-router-dom'

const Nav = () => {
	const { pathname } = useLocation()

	return (
		<nav className='border-r border-r-gray-300'>
			<ul className='p-4 flex flex-col gap-y-1'>
				<li>
					<Link to='/customers' className={twMerge(clsx('flex items-center gap-x-2 w-full pl-4 py-2 rounded hover:bg-gray-500/10 transition-all', {
						'bg-primary/15 text-primary hover:bg-primary/15': pathname === '/customers'
					}))}>
						<FaRegUser className='size-6' />
						Clientes
					</Link>
				</li>
				<li>
					<Link to='/products' className={twMerge(clsx('flex items-center gap-x-2 w-full pl-4 py-2 rounded hover:bg-gray-500/10 transition-all', {
						'bg-primary/15 text-primary hover:bg-primary/15': pathname === '/products'
					}))}>
						<HiOutlineShoppingCart className='size-6' />
						Productos
					</Link>
				</li>
				<li>
					<Link to='/orders' className={twMerge(clsx('flex items-center gap-x-2 w-full pl-4 py-2 rounded hover:bg-gray-500/10 transition-all', {
						'bg-primary/15 text-primary hover:bg-primary/15': pathname === '/orders'
					}))}>
						<PiCallBell className='size-6' />
						Órdenes
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Nav