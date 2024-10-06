import Container from '@components/Container'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header className='bg-white fixed top-0 left-0 z-10 w-full h-header-height'>
			<Container className={`flex justify-between items-center h-full`}>
				<Link to='/'>
					<h1>Home</h1>
				</Link>
			</Container>
		</header>
	)
}
