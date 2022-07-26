import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
/*
Import these methods to create and populate into Database
import { addColletionAndDocuments } from "../utils/firebase/firebase.utils.js";
import SHOP_DATA from "../shop-data.js";
*/

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  /*Create and Populate data from Firebase
  Used this method to create and populate categories into the Firebase Database
  useEffect(() => {
    addColletionAndDocuments("categories", SHOP_DATA);
  }, []);
  */

  useEffect(() => {
    //when using async methods using useEffect Hook, create the separate method here like getCategoriesMap
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);
  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
