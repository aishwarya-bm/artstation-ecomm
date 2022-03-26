import { useFilterProducts } from "../../../contexts/filter-context/filter-context";

export default function CategoryFilter() {
  const { state: stateFilter, dispatch: dispatchFilter } = useFilterProducts();
  return (
    <>
      <h5>Category</h5>
      <ul className="list list-no-bullet">
        <li>
          <input
            type="checkbox"
            id="brushes"
            name="brushes"
            onChange={() => {
              dispatchFilter({
                type: "CATEGORY_SELECTION",
                payload: "brushes",
              });
            }}
            checked={stateFilter.category.brushes ? true : false}
          />
          <label htmlFor="brushes">Brushes</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="colours"
            name="colours"
            onChange={() =>
              dispatchFilter({ type: "CATEGORY_SELECTION", payload: "colors" })
            }
            checked={stateFilter.category.colors ? true : false}
          />
          <label htmlFor="colours">Colours</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="papers"
            name="papers"
            onChange={() =>
              dispatchFilter({ type: "CATEGORY_SELECTION", payload: "papers" })
            }
            checked={stateFilter.category.papers ? true : false}
          />
          <label htmlFor="papers">Papers</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="sketch"
            name="sketch"
            onChange={() =>
              dispatchFilter({
                type: "CATEGORY_SELECTION",
                payload: "sketches",
              })
            }
            checked={stateFilter.category.sketches ? true : false}
          />
          <label htmlFor="sketch">Sketch</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="canvas"
            name="canvas"
            onChange={() =>
              dispatchFilter({ type: "CATEGORY_SELECTION", payload: "canvas" })
            }
            checked={stateFilter.category.canvas ? true : false}
          />
          <label htmlFor="canvas">Canvas</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="medium"
            name="medium"
            onChange={() =>
              dispatchFilter({ type: "CATEGORY_SELECTION", payload: "mediums" })
            }
            checked={stateFilter.category.mediums ? true : false}
          />
          <label htmlFor="medium">Mediums</label>
        </li>
      </ul>
    </>
  );
}
