import Header from './../components/Header'
import Nav from '../components/Nav'

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<Nav />
			<main>
				{children}
			</main>
		</>
	)
}

export default Layout