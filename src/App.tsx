import { Button, ButtonGroup } from 'reactstrap'
import styled from 'styled-components'

import Cart from './Cart'
import data from './data/items.json'
import formatNumber from './helper/formatNumber'

const ListItem = styled.li`
	margin-bottom: 20px;
`

const App: React.FC = () => (
	<div>
		<Cart value={0} />
		<ul>
			{data.map(({ name, price }, i) => (
				<ListItem key={i}>
					<p>Item Name: {name}</p>
					<p>Price: {formatNumber(price)}</p>
					<ButtonGroup>
						<Button color="success">Buy</Button>
						<Button color="danger">Remove</Button>
					</ButtonGroup>
				</ListItem>
			))}
		</ul>
	</div>
)

export default App
