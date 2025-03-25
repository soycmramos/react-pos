import Container from './components/Container'
import Input from './components/Input'
import Button from './components/Button'

const App = () => {
	return (
		<section className='py-8'>
			<Container className='max-w-xl'>
				<form className='mx-auto'>
					<div className="mb-8">
						<h2 className='text-3xl text-center font-semibold'>Iniciar Sesión</h2>
						<p className='text-center'>Ingresa a tu cuenta</p>
					</div>
					<div className="flex flex-col gap-4">
						<label className='font-semibold'>
							Correo electrónico
							<Input type='email' name='email' placeholder='correo@ejemplo.com' className='font-normal' />
						</label>
						<label className='font-semibold'>
							Contraseña
							<Input type='password' name='password' placeholder='*****' className='font-normal' />
						</label>
						<Button variant='primary'>Ingresar</Button>
					</div>
				</form>
			</Container>
		</section>
	)
}

export default App