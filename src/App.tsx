import Cart from './Cart'

import data from './data/items.json'
import formatNumber from './helper/formatNumber'

const App: React.FC = () => (
	<div>
		<Cart value={0} />
		<ul>
			{data.map(({ name, price }, i) => (
				<li key={i}>
					<p>Item Name: {name}</p>
					<p>Price: {formatNumber(price)}</p>
				</li>
			))}
		</ul>
	</div>
)

export default App
