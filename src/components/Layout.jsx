import Header from './Header'
import Aside from './Aside'
import Footer from './Footer'

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<Aside />
			<main>
				{children}
			</main>
			<Footer />
		</>
	)
}
