import {ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM} from '../constants/actionTypes';


const initialState = {
	cart: [],
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

		case ADD_ITEM:

			const newState = Object.assign({}, state, {});

			let match = false;

			newState.cart.forEach(item => {
				if(item.id === action.id) {
					match = true;
				}
			});

			if(!match) {

				const product = getProductById(state, action.id);

				newState.cart = [
					...state.cart,
					{
						id: product.id,
						name: product.name,
						amount: 1
					}
				]
			}

			return newState;

			break;

		case UPDATE_ITEM:

			if(action.amount < 1) {
				return Object.assign({}, state, {});
			}

			return Object.assign({}, state, {
				cart: state.cart.map(curr => {
					if(curr.id === action.id) {

						return Object.assign({}, curr, {
							amount: action.amount
						});

					}else {
						return curr;
					}
				})
			});

			break;

		case REMOVE_ITEM:

			return Object.assign({}, state, {
				cart: state.cart.filter(item => {
					return item.id !== action.id
				})
			});

			break;

		default:
			return state;
			break;
	}

}
