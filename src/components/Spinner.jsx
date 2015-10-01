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
			<div className="c-spinner">
				<button onClick={this._onButtonClick.bind(this, MIN)} disabled={this.props.disabled}> - </button>
				<input type="text" value={this.props.value} disabled={this.props.disabled}/>
				<button onClick={this._onButtonClick.bind(this, PLUS)} disabled={this.props.disabled}> + </button>
			</div>
		)
	}
}
