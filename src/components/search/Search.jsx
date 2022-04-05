import { useFilterProducts } from "../../contexts/index-context";

export function Search() {
  const { state, dispatch } = useFilterProducts();
  return (
    <>
      <div className="d-flex p-rel">
        <input
          type="text"
          placeholder="search for product"
          value={state.searchText}
          onChange={event =>
            dispatch({ type: "SEARCH_FOR", payload: event.target.value })
          }
        />
        <button
          className="btn btn-link nav-btn"
          style={{ position: "absolute", right: 0, color: "black" }}
          onClick={() => dispatch({ type: "CLEAR_SEARCHTEXT" })}
        >
          x
        </button>
      </div>
    </>
  );
}
