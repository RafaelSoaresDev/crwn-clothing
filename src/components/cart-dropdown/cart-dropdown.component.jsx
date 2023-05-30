import { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
	CartDropdownContainer,
	EmptyMessage,
	CartItems,
} from './cart-dropdown.styles';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);

	return (
		<Fragment>
			<CartDropdownContainer>
				<CartItems>
					{cartItems.length ? (
						cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
					) : (
						<EmptyMessage>Your cart is empty</EmptyMessage>
					)}
				</CartItems>
				<Link className="cart-item-link" to="/checkout">
					<Button>GO TO CHECKOUT</Button>
				</Link>
			</CartDropdownContainer>
		</Fragment>
	);
};

export default CartDropdown;
