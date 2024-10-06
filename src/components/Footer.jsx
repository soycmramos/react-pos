import Container from './Container'

export default function Footer() {
	return (
		// <footer className='bg-neutral-900 py-10 px-10 text-center mt-auto text-gray-100'>
		<footer className='bg-neutral-900 py-10 px-10 text-center text-gray-100'>
			<Container>
				<p>{new Date().getFullYear()}</p>
			</Container>
		</footer>
	)
}
