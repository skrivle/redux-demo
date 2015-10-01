import React from 'react';
import Cart from './Cart';
import ProductList from './ProductList';


export default class Page extends React.Component {
	render () {
		return (
			<div>
				<ProductList/>
				<Cart/>
			</div>
		)
	}
}
