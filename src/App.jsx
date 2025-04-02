import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Customers from './Pages/Customers'
import AddNewCustomer from './Pages/AddNewCustomer'
import EditCustomer from './Pages/EditCustomer'
import Products from './Pages/Products'
import Home from './Pages/Home'

const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/customers' element={<Customers />} />
				<Route path='/customers/new' element={<AddNewCustomer />} />
				<Route path='/customers/:customerId/edit' element={<EditCustomer />} />
				<Route path='/products' element={<Products />} />
				<Route path='*' element={<h1>Not found</h1>} />
			</Routes>
		</Layout>
	)
}

export default App