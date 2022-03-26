const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_LOWTOHIGH": {
      return {
        ...state,
        sortby: action.payload,
      };
    }

    case "SORT_BY_HIGHTOLOW":
      return {
        ...state,
        sortby: action.payload,
      };

    case "INCLUDE_OUT_OF_STOCK":
      return {
        ...state,
        includeOutOfStock: !state.includeOutOfStock,
      };

    case "FAST_DELIVERY":
      return {
        ...state,
        fastDelivery: !state.fastDelivery,
      };

    case "PRICE_RANGE":
      return { ...state, priceLimit: action.payload };

    case "RATING":
      return { ...state, rating: action.payload };

    case "CATEGORY_SELECTION":
      return {
        ...state,
        category: {
          ...state.category,
          [action.payload]: !state.category[action.payload],
        },
      };

    case "OPEN_CATEGORY":
      return {
        sortby: "",
        includeOutOfStock: false,
        fastDelivery: false,
        priceLimit: 5000,
        rating: "",
        searchText: "",
        category: {
          [action.payload]: true,
        },
      };

    case "CLEAR_FILTER":
      return {
        sortby: "",
        includeOutOfStock: false,
        fastDelivery: false,
        priceLimit: 5000,
        rating: "",
        category: {},
        searchText: "",
      };

    case "SEARCH_FOR":
      return {
        ...state,
        searchText: action.payload,
      };

    case "CLEAR_SEARCHTEXT":
      return {
        ...state,
        searchText: "",
      };

    default:
      return state;
  }
};

export { filterReducer };
