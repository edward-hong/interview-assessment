import formatNumber from './helper/formatNumber'

interface CartProps {
	value: number
}

const Cart: React.FC<CartProps> = ({ value }) => {
	return (
		<div>
			<h1>Cart</h1>
			<p>Value: ${formatNumber(value)}</p>
		</div>
	)
}

export default Cart
