import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

//Using Styled-Components
import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";

const CartDropDown = () => {
  //retrieve the cartItems placed using CartContext
  const { cartItems } = useContext(CartContext);

  //navigate helps us to go the checkout page when button clicked
  const navigate = useNavigate();
  const navigateToCheckoutHandler = () => {
    navigate("/checkout");
  };

  /*
    Here all the tags are retrieved from cart-dropdown.styles.jsx
    If cartItems isn't empty it will display all the cart items inside
    Else the cart-dropdown will show "Your cart is empty"
  */
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty.</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={navigateToCheckoutHandler}>Go TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
