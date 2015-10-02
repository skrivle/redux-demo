import {UPDATE_CART_REQUEST, UPDATE_CART_SUCCESS, SET_PAGE} from '../constants/actionTypes';

const initialState = {
	cart: {
		isFetching: false,
		items: []
	},
	products: {
		pages: 0,
		currentPage: 1,
		items: [],
		itemsToShow: []
	}
};

const ITEMS_PER_PAGE = 6;


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

		case SET_PAGE:

			const start = (action.page - 1) * ITEMS_PER_PAGE;
			const end = start + ITEMS_PER_PAGE;

			return Object.assign({}, state, {
				products: {
					pages: state.products.pages,
					currentPage: action.page,
					itemsToShow: state.products.items.slice(start, end),
					items: state.products.items
				}
			});


			break;

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
