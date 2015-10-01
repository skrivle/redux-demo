
//
// Fake service to simulate REST api
//

let data = window.INITIAL_STATE.cart.items.slice(0)


function getProductById(id) {

	let result;

	window.INITIAL_STATE.products.forEach(product => {
		if(id === product.id) {
			result = product;
		}
	});

	return result;
}



export default {

	updateItem: function (id, amount) {

		return new Promise((resolve, reject) => {

			setTimeout(() => {

				let updatedData;

				if(amount < 1) {

					updatedData = data.slice(0).filter(item => {
						return item.id !== id
					});

				} else {

					let match = false;

					updatedData = data.slice(0).map(item => {
						if(item.id === id) {
							match = true;
							item.amount = amount
						}

						return item;
					});

					if(!match) {
						updatedData = data.slice();

						let product = getProductById(id);

						updatedData.push({
							id: id,
							name: product.name,
							amount: amount,
							isFetching: false
						});
					}
				}


				data = updatedData;

				resolve(data);

			}, Math.random() * 1000);

		});

	}
}
