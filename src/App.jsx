import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Orders from './pages/Orders'

export default function App() {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/orders' element={<Orders />} />
			</Routes>
		</Layout>
	)
}
