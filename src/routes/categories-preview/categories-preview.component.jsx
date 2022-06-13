import { Fragment, useContext } from "react";

import { CategoriesContext } from "../../context/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    //Fragment allow us to wrap multiple elements without adding an extra node to the DOM
    //Object.keys: return an array whose elements are strings corresponding to the enumerable properties found directly upon object
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
