import React from 'react';
import Product from './Product';
import {connect} from 'react-redux';
import {addItem, updateItem, removeItem} from '../actions/cart';


function getProductAmountFromCart (cart, id) {

	let result = 0;

	cart.forEach(item => {
		if(item.id === id) {
			result = item.amount
		}
	});

	return result;

}

class ProductList extends React.Component {

	constructor () {
		super();
		this.onAdd = this.onAdd.bind(this);
		this.onUpdate = this.onUpdate.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}

	onAdd (id) {
		this.props.dispatch(addItem(id));
	}

	onUpdate (id, value) {
		this.props.dispatch(updateItem(id, value));
	}

	onDelete (id) {
		this.props.dispatch(removeItem(id));
	}

	render () {

		const products = this.props.products.map(item => {
			return <li key={item.id}>
				<Product
					name={item.name}
					id={item.id}
					amount={getProductAmountFromCart(this.props.cart, item.id)}
					onAdd={this.onAdd.bind(this, item.id)}
					onUpdate={this.onUpdate}
					onDelete={this.onDelete.bind(this, item.id)}/>
				</li>;
		})

		return (
			<ul>
				{products}
			</ul>
		)
	}
}


function select (state) {
	return {
		products: state.products,
		cart: state.cart
	};
}

export default connect(select)(ProductList);
