import React from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const DeleteButton = styled.button`
	font-size: 3rem;
	background: none;
	border: 0;
	&:hover {
		color: ${props => props.theme.onyx};
		cursor: pointer;
	}
`;

const REMOVE_FROM_CART_MUTATION = gql`
	mutation removeFromCart($id: ID!) {
		removeFromCart(id: $id) {
			id
		}
	}
`;

class RemoveFromCart extends React.Component {
	static propTypes = {
		id: PropTypes.string.isRequired
	};

	//This gets called as soon as a mutation is performed and we have a response form
	//the server

	update = (cache, payload) => {
		//Read the cache

		const data = cache.readQuery({
			query: CURRENT_USER_QUERY
		});

		//Remove that item from the car
		const cartItemId = payload.data.removeFromCart.id;

		//Write it back to the cache

		data.me.cart = data.me.cart.filter(cartItem => cartItem.id !== cartItemId);
		cache.writeQuery({
			query: CURRENT_USER_QUERY,
			data
		});
	};

	render() {
		return (
			<Mutation
				mutation={REMOVE_FROM_CART_MUTATION}
				variables={{ id: this.props.id }}
				update={this.update}
				optimisticResponse={{
					__typename: 'Mutation',
					removeFromCart: {
						__typename: 'CartItem',
						id: this.props.id
					}
				}}
			>
				{(removeFromCart, { loading, error }) => (
					<DeleteButton
						disabled={loading}
						onClick={() => {
							removeFromCart().catch(err => alert(err.message));
						}}
						title="Delete Item"
					>
						&times;
					</DeleteButton>
				)}
			</Mutation>
		);
	}
}

export default RemoveFromCart;
