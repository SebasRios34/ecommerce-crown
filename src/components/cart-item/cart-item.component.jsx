//Using Styled Components
import {
  CartItemContainer,
  Img,
  ItemDetails,
  Name,
  Price,
} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  //destructioring of cartItem
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} x ${price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
