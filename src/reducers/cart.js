import {UPDATE_CART_REQUEST, UPDATE_CART_SUCCESS} from '../constants/actionTypes';

const initialState = {
	cart: {
		isFetching: false,
		items: []
	},
	products: []
};


function getProductById (state, id) {

	let result;

	state.products.forEach(product => {
		if(product.id === id) {
			result = product;
		}
	});

	return result;
}

export function cart (state = initialState, action) {

	switch (action.type) {

		case UPDATE_CART_REQUEST:

			return Object.assign({}, state, {
				cart: Object.assign({}, state.cart, {
					isFetching: true
				})
			});

			break;

		case UPDATE_CART_SUCCESS:

			return Object.assign({}, state, {
				cart: Object.assign({}, state.cart, {
					isFetching: false,
					items: action.items
				})
			});

			break;

		default:
			return state;
	}

}
