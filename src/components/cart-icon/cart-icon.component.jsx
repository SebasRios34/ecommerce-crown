import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

//Using Styled Components
import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  //retrieve the isCartOpen, setIsCartOpen and cartCount placed using CartContext
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  /*
    inverts the value for isCartOpen, if it is open, close it and viceversa
    setIsCartOpen help us change the value of isCartOpen
  */
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
