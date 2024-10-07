import Container from '@components/Container'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header className='sticky top-0 bg-white border-b border-gray-300'>
			<Container className={`flex justify-between items-center h-full`}>
				<Link to='/'>
					<h1>Home</h1>
				</Link>
			</Container>
		</header>
	)
}
