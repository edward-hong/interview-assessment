import { useState } from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import styled from 'styled-components'

import Cart from './Cart'
import data from './data/items.json'
import formatNumber from './helper/formatNumber'

interface CartState {
	name: string
	price: number
}

const ListItem = styled.li`
	margin-bottom: 20px;
`

const App: React.FC = () => {
	const [cartItems, setCartItems] = useState<CartState[] | []>([])

	const handleAdd = (name: string, price: number) => () => {
		if (cartItems.find(item => name === item.name)) {
			const index = cartItems.findIndex(item => name === item.name)
			const updatedCartItems = [
				...cartItems.slice(0, index),
				{ name: cartItems[index].name, price: cartItems[index].price + price },
				...cartItems.slice(index + 1),
			]
			setCartItems(updatedCartItems)
		} else {
			setCartItems([...cartItems, { name, price }])
		}
	}

	const handleRemove = (name: string, price: number) => () => {
		const index = cartItems.findIndex(item => name === item.name)

		if (index < 0) {
			return
		}

		if (cartItems[index].price >= price) {
			const updatedCartItems = [
				...cartItems.slice(0, index),
				{ name: cartItems[index].name, price: cartItems[index].price - price },
				...cartItems.slice(index + 1),
			]
			setCartItems(updatedCartItems)
		}
	}

	console.log(cartItems)

	return (
		<div>
			<Cart value={0} />
			<ul>
				{data.map(({ name, price }, i) => (
					<ListItem key={i}>
						<p>Item Name: {name}</p>
						<p>Price: {formatNumber(price)}</p>
						<ButtonGroup>
							<Button onClick={handleAdd(name, price)} color="success">
								Add
							</Button>
							<Button onClick={handleRemove(name, price)} color="danger">
								Remove
							</Button>
						</ButtonGroup>
					</ListItem>
				))}
			</ul>
		</div>
	)
}

export default App
