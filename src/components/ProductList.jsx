import React from 'react';
import Product from './Product';
import {connect} from 'react-redux';
import {addItem, updateItem, removeItem, setPage} from '../actions/cart';


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

	onPagerClick (page) {
		this.props.dispatch(setPage(page));
	}

	render () {

		const products = this.props.products.map(item => {
			return <div key={item.id} className="col-sm-3">
				<Product
					name={item.name}
					id={item.id}
					amount={getProductAmountFromCart(this.props.cart, item.id)}
					onAdd={this.onAdd.bind(this, item.id)}
					onUpdate={this.onUpdate}
					onDelete={this.onDelete.bind(this, item.id)}
					disabled={this.props.isFetching}/>
				</div>;
		});

		const pages = [];

		for(let i = 1; i <= this.props.pages; i ++) {

			let classes = '';

			if(this.props.currentPage === i) {
				classes = 'active';
			}

			pages.push(<li key={i} className={classes}><a href="#" onClick={this.onPagerClick.bind(this, i)}>{i}</a></li>)
		}

		return (

			<div>

				<div className="row">
					{products}
				</div>


				<nav className="text-center">
					<ul className="pagination">
						{pages}
					</ul>
				</nav>
			</div>


		)
	}
}


function select (state) {
	return {
		products: state.products.itemsToShow,
		cart: state.cart.items,
		isFetching: state.cart.isFetching,
		pages: state.products.pages,
		currentPage: state.products.currentPage
	};
}

export default connect(select)(ProductList);
