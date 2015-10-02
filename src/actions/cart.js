
import {
	ADD_ITEM,
	UPDATE_ITEM,
	REMOVE_ITEM,
	UPDATE_CART_REQUEST,
	UPDATE_CART_SUCCESS,
	SET_PAGE} from '../constants/actionTypes';

import cartService from '../services/cartService';

function requestCart (id) {
	return {
		type: UPDATE_CART_REQUEST
	}
}

function receiveCart (items) {
	return {
		type: UPDATE_CART_SUCCESS,
		items: items
	}
}

function _updateItem (id, amount) {
	return function (dispatch) {

		dispatch(requestCart());

		cartService
			.updateItem(id, amount)
			.then((items) => {
				dispatch(receiveCart(items));
			});

	}
}

export function addItem (id) {
	return _updateItem(id, 1);
}

export function updateItem (id, amount) {
	return _updateItem(id, amount);
}

export function removeItem (id) {
	return _updateItem(id, 0);
}

export function setPage (page) {
	return {
		type: SET_PAGE,
		page: page
	}
}
