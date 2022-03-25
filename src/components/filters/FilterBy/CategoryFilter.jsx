export default function CategoryFilter() {
  return (
    <>
      <h5>Category</h5>
      <ul className="list list-no-bullet">
        <li>
          <input
            type="checkbox"
            id="brushes"
            name="brushes"
            // onChange={() =>
            //   dispatch({ type: "CATEGORY_SELECTION", payload: "brushes" })
            // }
            // checked={state.category.brushes ? true : false}
          />

          <label htmlFor="brushes">Brushes</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="colours"
            name="colours"
            // onChange={() =>
            //   dispatch({ type: "CATEGORY_SELECTION", payload: "colors" })
            // }
            // checked={state.category.colors ? true : false}
          />

          <label htmlFor="colours">Colours</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="papers"
            name="papers"
            // onChange={() =>
            //   dispatch({ type: "CATEGORY_SELECTION", payload: "papers" })
            // }
            // checked={state.category.papers ? true : false}
          />
          <label htmlFor="papers">Papers</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="sketch"
            name="sketch"
            // onChange={() =>
            //   dispatch({ type: "CATEGORY_SELECTION", payload: "sketches" })
            // }
            // checked={state.category.sketches ? true : false}
          />
          <label htmlFor="sketch">Sketch</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="canvas"
            name="canvas"
            // onChange={() =>
            //   dispatch({ type: "CATEGORY_SELECTION", payload: "canvas" })
            // }
            // checked={state.category.canvas ? true : false}
          />
          <label htmlFor="canvas">Canvas</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="medium"
            name="medium"
            // onChange={() =>
            //   dispatch({ type: "CATEGORY_SELECTION", payload: "mediums" })
            // }
            // checked={state.category.mediums ? true : false}
          />

          <label htmlFor="medium">Mediums</label>
        </li>
      </ul>
    </>
  );
}
