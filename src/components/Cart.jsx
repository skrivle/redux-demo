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
			return <div key={item.id} className="container-fluid form-group"><CartItem
				id={item.id}
				name={item.name}
				amount={item.amount}
				onUpdate={this.onItemUpdate}
				disabled={this.props.isFetching}></CartItem></div>;
		});

		return (
			<div className="panel panel-primary">
				<div className="panel-heading">
					<div className="panel-title">My Cart ({products.length})</div>
				</div>

				{products}

			</div>
		)

	}

}

function select (state) {
	return {
		items: state.cart.items,
		isFetching: state.cart.isFetching
	};
}

export default connect(select)(Cart)
