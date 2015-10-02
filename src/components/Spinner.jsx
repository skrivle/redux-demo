import React from 'react';
import {PLUS, MIN} from '../constants/actionTypes';

export default class Spinner extends React.Component {

	_onButtonClick (type) {

		let newValue;

		if(type === PLUS) {
			newValue = this.props.value + 1;
		}

		if(type === MIN) {
			newValue = this.props.value - 1;
		}

		this.props.onUpdate(newValue);
	}

	render () {
		return (
			<div className="input-group form-group">
				<span className="input-group-btn"><button className="btn" onClick={this._onButtonClick.bind(this, MIN)} disabled={this.props.disabled}> - </button></span>
				<input className="form-control text-center" type="text" value={this.props.value} disabled={this.props.disabled}/>
				<span className="input-group-btn"><button className="btn" onClick={this._onButtonClick.bind(this, PLUS)} disabled={this.props.disabled}> + </button></span>
			</div>
		)
	}
}
