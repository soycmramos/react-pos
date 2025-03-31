import { Link } from 'react-router-dom'
import Container from './../components/Container'

const Home = () => {
	return (
		<Container>
			<section className='py-8'>
				<nav>
					<ul className='flex gap-x-4'>
						<li><Link to='/customers' className='hover:text-text-color/75'>Clientes</Link></li>
						<li><Link to='/products' className='hover:text-text-color/75'>Productos</Link></li>
					</ul>
				</nav>
			</section>
		</Container>
	)
}

export default Home