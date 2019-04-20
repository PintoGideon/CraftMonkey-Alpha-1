export default function calcTotalPrice(cart) {
	const amount = cart.reduce((tally, cartItem) => {
		if (!cartItem.item) return tally;
		return tally + cartItem.quantity * cartItem.item.price;
	}, 0);

	return amount;
}
