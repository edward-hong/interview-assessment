interface CartProps {
	value: number
}

const Cart: React.FC<CartProps> = ({ value }) => {
	return (
		<div>
			<h1>Cart</h1>
			<p>Value: ${value}</p>
		</div>
	)
}

export default Cart
