import { useFilterProducts } from "../../contexts/index-context";
import "./search.css";
export function Search() {
  const { state, dispatch } = useFilterProducts();
  return (
    <>
      <div className="d-flex p-rel">
        <input
          type="text"
          placeholder="search for product"
          value={state.searchText}
          onChange={event => dispatch({ type: "SEARCH_FOR", payload: event.target.value })}
        />
        <button
          className="btn btn-link nav-btn p-abs search-close"
          onClick={() => dispatch({ type: "CLEAR_SEARCHTEXT" })}>
          <i class="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </>
  );
}
