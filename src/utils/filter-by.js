const categoryProducts = (state, data) =>{
    if(Object.entries(state.category).length === 0) 
        return data;
    let selectedCategoryData = [];
    for (let [key, value] of Object.entries(state.category)) {
            if(value)
             {
                let currCatData = data.filter((item) => item.categoryName === key);
                selectedCategoryData = [...selectedCategoryData,...currCatData]
            }
    }
    return selectedCategoryData.length === 0 ? data : selectedCategoryData;
}

const priceLimitProducts = (state, data) =>
  [...data].filter((item) => Number(item.curr_price) <= Number(state.priceLimit));

const ratingLimitProducts = (state, data) => [...data].filter((item) => Number(item.rating) >= Number(state.rating))


const sortProducts = (state, data) => {
  switch (state.sortby) {
    case "lowToHigh":
      return [...data].sort((c, d) => Number(c.curr_price) - Number(d.curr_price));
    case "highToLow":
      return [...data].sort((c, d) => Number(d.curr_price) - Number(c.curr_price));
    default:
      return data;
  }
};

const searchedProducts = (state,data) => {
    return [...data].filter((item)=>(item.title.toLowerCase()).includes(state.searchText.toLowerCase()))
}

export {categoryProducts,priceLimitProducts,ratingLimitProducts,sortProducts,searchedProducts};


