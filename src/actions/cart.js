
import {ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM} from '../constants/actionTypes';

export function addItem (id, name, amount) {
	return {
		type: ADD_ITEM,
		id: id
	}
}

export function updateItem (id, amount) {
	return {
		type: UPDATE_ITEM,
		id: id,
		amount: amount
	}
}

export function removeItem (id, amount) {
	return {
		type: REMOVE_ITEM,
		id: id
	}
}
