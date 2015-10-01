import React from 'react';
import {connect} from 'react-redux';
import {addItem, updateItem} from '../actions/cart';
import CartItem from './CartItem';


class Cart extends React.Component {

	constructor () {
		super();
		this.onItemUpdate = this.onItemUpdate.bind(this);
	}

	onItemUpdate (id, amount) {
		this.props.dispatch(updateItem(id, amount));
	}

	render () {

		const {dispatch, items} = this.props;

		const products = items.map(item => {
			return <li key={item.id}><CartItem
				id={item.id}
				name={item.name}
				amount={item.amount}
				onUpdate={this.onItemUpdate}></CartItem></li>;
		});

		return (
			<div>
				<h2>My Cart ({products.length})</h2>
				<ul>
					{products}
				</ul>
			</div>
		)

	}

}

function select (state) {
	return {
		items: state.cart
	};
}

export default connect(select)(Cart)
