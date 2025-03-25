import { Routes, Route } from 'react-router-dom'
import Customers from './Pages/Customers'
import Layout from './layouts/Layout'
import Products from './Pages/Products'

const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/customers' element={<Customers />} />
				<Route path='/products' element={<Products />} />
				<Route path='*' element={<h1>Not found</h1>} />
			</Routes>
		</Layout>
	)
}

export default App