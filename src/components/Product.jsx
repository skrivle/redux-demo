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
			control = <button className="btn btn-primary btn-block" onClick={this.onAddBtnClick} disabled={this.props.disabled}>Add to cart</button>
		}else {
			control = <Spinner value={this.props.amount} onUpdate={this.onSpinnerUpdate} disabled={this.props.disabled}/>
			deleteButton = <button className="btn btn-danger btn-block" onClick={this.onDeleteButtonClick} disabled={this.props.disabled}>remove</button>
		}

		const productStyle = {
			height:'350px'
		};

		const imgStyle = {
			maxWidth: '100%'
		};

		return (
			<div className="thumbnail" style={productStyle}>

				<div className="caption">
				<img src="http://placehold.it/350x350" style={imgStyle}/>
				<h4>{this.props.name}</h4>
				{control}
				{deleteButton}
				</div>
			</div>
		)
	}
}
