import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";

import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";

const ProductCard = ({ product }) => {
  //destructoring of product obtain from props(category-preview)
  const { name, price, imageUrl } = product;

  //retrieve from addItemToCart from CartContext
  const { addItemToCart } = useContext(CartContext);

  //handler for addItemToCart
  const addProductToCart = () => addItemToCart(product);

  /*
  Button Class type: inverted
  */
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{"$" + price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
