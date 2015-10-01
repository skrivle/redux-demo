import React from 'react';
import Spinner from './Spinner';

export default class Product extends React.Component {

	constructor () {
		super();
		this.onAddBtnClick = this.onAddBtnClick.bind(this);
		this.onSpinnerUpdate = this.onSpinnerUpdate.bind(this);
		this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
	}

	onAddBtnClick () {
		this.props.onAdd();
	}

	onSpinnerUpdate (value) {
		this.props.onUpdate(this.props.id, value);
	}

	onDeleteButtonClick () {
		this.props.onDelete();
	}

	render () {

		let control, deleteButton;

		if(!this.props.amount) {
			control = <button onClick={this.onAddBtnClick}>Add to cart</button>
		}else {
			control = <Spinner value={this.props.amount} onUpdate={this.onSpinnerUpdate}/>
			deleteButton = <button onClick={this.onDeleteButtonClick}>x</button>
		}

		return (
			<div>
				<div>{this.props.name}</div>
				{control}
				{deleteButton}
			</div>
		)
	}
}
