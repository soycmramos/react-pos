import Container from './../components/Container'
import Input from './../components/Input'
import Button from './../components/Button'
import ProductCard from '../components/ProductCard'
import { FaPlus } from 'react-icons/fa'

const Products = () => {
	return (
		<section className='py-8'>
			<Container>
				<div className='mb-5'>
					<h1 className='text-4xl font-semibold'>Productos</h1>
				</div>
				<div className='flex justify-end gap-2 mb-4'>
					<Input type='search' name='filter-customer' placeholder='Buscar...' className='inline-flex w-auto' />
					<Button variant='primary-outlined' className='inline-flex items-center gap-1'>
						<FaPlus />Crear nuevo producto
					</Button>
				</div>
			</Container>
			<Container>
				<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
					<ProductCard name='Café' price={2000} img='https://placehold.co/1280x720' description='Lorem Ipsum similique, cupiditate voluptatibus blanditiis mollitia doloribus neque expedita voluptatem doloremque magni laborum, corrupti voluptates nostrum nulla? Debitis perspiciatis asperiores quisquam?' />
					<ProductCard name='Batido de proteína' price={12000} img='https://placehold.co/1280x720' description='Lorem Ipsum similique, cupiditate voluptatibus blanditiis mollitia doloribus neque expedita voluptatem doloremque magni laborum, corrupti voluptates nostrum nulla? Debitis perspiciatis asperiores quisquam?' />
					<ProductCard name='Jugo verde' price={8000} img='https://placehold.co/1280x720' description='Lorem Ipsum similique, cupiditate voluptatibus blanditiis mollitia doloribus neque expedita voluptatem doloremque magni laborum, corrupti voluptates nostrum nulla? Debitis perspiciatis asperiores quisquam?' />
					<ProductCard name='Milo' price={6000} img='https://placehold.co/1280x720' description='Lorem Ipsum similique, cupiditate voluptatibus blanditiis mollitia doloribus neque expedita voluptatem doloremque magni laborum, corrupti voluptates nostrum nulla? Debitis perspiciatis asperiores quisquam?' />
					<ProductCard name='Desayuno' price={1400} img='https://placehold.co/1280x720' description='Lorem Ipsum similique, cupiditate voluptatibus blanditiis mollitia doloribus neque expedita voluptatem doloremque magni laborum, corrupti voluptates nostrum nulla? Debitis perspiciatis asperiores quisquam?' />
				</div>
			</Container>
		</section>
	)
}

export default Products