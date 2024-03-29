import {
	CartItemContainer,
	ItemDetails,
	Name,
	Price,
} from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
	const { name, quantity, imageUrl, price } = cartItem;
	return (
		<CartItemContainer>
			<img src={imageUrl} alt={`${name}`} />
			<ItemDetails>
				<Name as="span">{name}</Name>
				<Price as="span">
					{quantity} x ${price}
				</Price>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
