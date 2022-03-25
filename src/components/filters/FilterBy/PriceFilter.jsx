export default function PriceFilter() {
  return (
    <>
      <h5>Price</h5>
      <div className="children-stacked">
        <div style={{ width: "100%" }}>
          <input
            name="priceLimit"
            type="range"
            min="1000"
            max="5000"
            // value={state.priceLimit}
            list="tickmarks"
            step="1000"
            // onChange={e =>
            //   dispatch({
            //     type: "PRICE_RANGE",
            //     payload: e.target.value,
            //   })
            // }
          />
          <datalist id="tickmarks">
            <option value="1000" label="1000"></option>
            <option value="2000" label="2000"></option>
            <option value="3000" label="3000"></option>
            <option value="4000" label="4000"></option>
            <option value="5000" label="5000"></option>
          </datalist>
        </div>
        <label className="d-flex price-range">
          <span className="">1000</span>
          <span className="">2000</span>
          <span className="">3000</span>
          <span className="">4000</span>
          <span className="">5000</span>
        </label>
      </div>
    </>
  );
}
