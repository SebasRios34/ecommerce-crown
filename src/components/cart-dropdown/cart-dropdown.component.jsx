import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

//Using Styled-Components
import { CartDropDownContainer, CartItems } from "./cart-dropdown.styles.jsx";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const navigateToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItems>
      <Button onClick={navigateToCheckoutHandler}>Go TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
