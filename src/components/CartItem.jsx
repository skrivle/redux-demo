import React from 'react';
import Spinner from './Spinner';

export default class CartItem extends React.Component {

	constructor () {
		super();
		this.onSpinnerUpdate = this.onSpinnerUpdate.bind(this);
	}

	onSpinnerUpdate (value) {
		this.props.onUpdate(this.props.id, value);
	}

	render () {
		return (
			<div>
				<div>{this.props.name}</div>
				<Spinner value={this.props.amount} onUpdate={this.onSpinnerUpdate}/>
			</div>
		)
	}
}
