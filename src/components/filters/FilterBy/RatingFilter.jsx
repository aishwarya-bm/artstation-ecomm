export default function RatingFilter() {
  return (
    <>
      <h5>Rating</h5>
      <ul className="list list-no-bullet">
        <li>
          <label htmlFor="fourplus">
            <input
              type="radio"
              id="fourplus"
              name="fourplus"
              value="fourplus"
              // checked={state.rating === 4 ? true : false}
              // onChange={() => dispatch({ type: "RATING", payload: 4 })}
            />
            4 stars & above
          </label>
        </li>
        <li>
          <label htmlFor="threeplus">
            <input
              type="radio"
              id="threeplus"
              name="threeplus"
              // checked={state.rating === 3 ? true : false}
              // onChange={() => dispatch({ type: "RATING", payload: 3 })}
            />
            3 stars & above
          </label>
        </li>
        <li>
          <label htmlFor="twoplus">
            <input
              type="radio"
              id="twoplus"
              name="twoplus"
              // checked={state.rating === 2 ? true : false}
              // onChange={() => dispatch({ type: "RATING", payload: 2 })}
            />
            2 stars & above
          </label>
        </li>
        <li>
          <label htmlFor="oneplus">
            <input
              type="radio"
              id="oneplus"
              name="oneplus"
              // checked={state.rating === 1 ? true : false}
              // onChange={() => dispatch({ type: "RATING", payload: 1 })}
            />
            1 stars & above
          </label>
        </li>
      </ul>
    </>
  );
}
