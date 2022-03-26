import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "./filter-reducer";

const FilterProductsContext = createContext();

const FilterProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, {
    sortby: "",
    includeOutOfStock: false,
    fastDelivery: false,
    priceLimit: 5000,
    rating: "",
    category: {},
    searchText: "",
  });

  return (
    <FilterProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterProductsContext.Provider>
  );
};

const useFilterProducts = () => useContext(FilterProductsContext);

export { useFilterProducts, FilterProductsProvider };
