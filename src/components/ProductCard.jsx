import Button from './Button'

const ProductCard = ({ img, name, price, description }) => {
	return (
		<article className="bg-white rounded-lg shadow-md overflow-hidden">
			<img src={img} className="aspect-video w-full object-cover hover:scale-105 transition-transform duration-300" alt={name} />
			<div className="p-4">
				<h2 className="text-xl font-semibold mb-2">{name}</h2>
				<div className="flex items-center justify-between mb-4">
					<span className="text-2xl font-bold text-primary">${price}</span>
					<Button variant='primary-outlined'>
						Ver detalles
					</Button>
				</div>
				<p className="text-gray-600 line-clamp-3">{description}</p>
			</div>
		</article>
	);
};

export default ProductCard;