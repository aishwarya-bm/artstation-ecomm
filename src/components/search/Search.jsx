import { useFilterProducts } from "../../contexts/filter-context/filter-context";

export default function Search() {
  const { state, dispatch } = useFilterProducts();
  return (
    <>
      <div className="d-flex">
        <input
          type="text"
          placeholder="type to search for product"
          value={state.searchText}
          onChange={event =>
            dispatch({ type: "SEARCH_FOR", payload: event.target.value })
          }
        />
        <button
          className="btn btn-link nav-btn"
          onClick={() => dispatch({ type: "CLEAR_SEARCHTEXT" })}
        >
          clear
        </button>
      </div>
    </>
  );
}
