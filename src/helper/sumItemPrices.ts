interface CartState {
	name: string
	price: number
}

const sumItemPrices = (cartItems: CartState[] | []) =>
	cartItems.map(item => item.price).reduce((a, b) => a + b, 0)

export default sumItemPrices
