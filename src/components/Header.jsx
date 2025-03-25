import Container from './Container'
import Button from './Button'

const Header = () => {
	return (
		<header className='bg-white shadow-sm p-3'>
			<Container className='flex justify-between items-center'>
				<a href="/">
					<h1 className='text-3xl'>Logo</h1>
				</a>
				<div className='flex gap-4'>
					<Button>Registrarse</Button>
					<Button variant='primary'>iniciar sesión</Button>
				</div>
			</Container>
		</header>
	)
}

export default Header