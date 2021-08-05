import Cart from './Cart'

import data from './data/items.json'

const App = () => (
	<div>
		<Cart value={0} />
		<ul>
			{data.map(({ name, price }, i) => (
				<li key={i}>
					<p>Item Name: {name}</p>
					<p>Price: {price}</p>
				</li>
			))}
		</ul>
	</div>
)

export default App
