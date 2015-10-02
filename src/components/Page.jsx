import React from 'react';
import Cart from './Cart';
import ProductList from './ProductList';


export default class Page extends React.Component {
	render () {
		return (
			<div className="form-group">
				<div className="col-sm-8"><ProductList/></div>
				<div className="col-sm-4"><Cart/></div>
			</div>
		)
	}
}
