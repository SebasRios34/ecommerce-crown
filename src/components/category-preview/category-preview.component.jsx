import ProductCard from "../product-card/product-card.component";

//Using Styled Components
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
  /*
    h2 contains a span/title (styled component) since is it a clickable component

    preview section:
      filter: keep everything(products) if the index is less than 4
      map: then map through all the filtered products
  */
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
