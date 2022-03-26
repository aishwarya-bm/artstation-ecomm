import CategoryFilter from "./FilterBy/CategoryFilter";
import PriceFilter from "./FilterBy/PriceFilter";
import RatingFilter from "./FilterBy/RatingFilter";
import SortFilter from "./FilterBy/SortFilter";
import { useFilterProducts } from "../../contexts/filter-context/filter-context";
import "./filter-products.css";

export default function FilterProducts() {
  const { state: stateFilter, dispatch: dispatchFilter } = useFilterProducts();

  return (
    <>
      <aside className="filter-container">
        <div className="filter-head d-flex">
          <h5>Filters</h5>
          <button
            className="btn btn-link"
            onClick={() =>
              dispatchFilter({
                type: "CLEAR_FILTER",
              })
            }
          >
            CLEAR
          </button>
        </div>
        <div className="filter-options">
          <PriceFilter />
          <hr></hr>
          <SortFilter />
          <hr></hr>
          <CategoryFilter />
          <hr></hr>
          <RatingFilter />
        </div>
      </aside>
    </>
  );
}
