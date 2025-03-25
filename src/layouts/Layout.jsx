import Header from './../components/Header'

const Layout = ({ Children }) => {
	return (
		<>
			<Header />
			{Children}
		</>
	)
}

export default Layout