export default function SortFilter() {
  // const { state, dispatch } = useFilterProducts();
  return (
    <>
      <h5>Sort by Price</h5>
      <ul className="list list-no-bullet">
        <li>
          <label htmlFor="lowToHigh">
            <input
              type="radio"
              id="lowToHigh"
              name="lowToHigh"
              // checked={state.sortby === "lowToHigh" ? true : false}
              // onChange={() =>
              //   dispatch({ type: "SORT_BY_LOWTOHIGH", payload: "lowToHigh" })
              // }
            />
            low to high
          </label>
        </li>
        <li>
          <label htmlFor="highToLow">
            <input
              type="radio"
              id="highToLow"
              name="highToLow"
              // checked={state.sortby === "highToLow" ? true : false}
              // onChange={() =>
              //   dispatch({ type: "SORT_BY_HIGHTOLOW", payload: "highToLow" })
              // }
            />
            high to low
          </label>
        </li>
      </ul>
    </>
  );
}
