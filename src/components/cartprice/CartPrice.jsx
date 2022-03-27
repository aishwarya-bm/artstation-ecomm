import { useCart } from "../../contexts/cart-context/cart-context";
import "./cartprice.css";
export default function CartPrice() {
  const { stateCart } = useCart();
  const { cartPrice, cartDiscount } = stateCart;

  return (
    <>
      <div className="cart-price children-stacked">
        <div className="children-stacked">
          <h5>Price details </h5>
          <hr></hr>

          <div className="total-price d-flex">
            <span>Total MRP {`(${stateCart.cartSize} items)`} </span>
            <span>
              &#x20b9;
              {cartPrice}
            </span>
          </div>

          <div className="discount-price d-flex">
            <span>Discount on MRP</span>
            <span className="green-text">
              -&nbsp; &#x20b9;
              {cartDiscount}
            </span>
          </div>
          {/* keeping for future use, not required for now */}
          {/* <div className="coupon-name d-flex">
            <span>Coupon code</span>
            <span>
              <input value="FLAT50" className="coupon-code text-center" />
            </span>
          </div>
          <div className="coupon-discount d-flex">
            <span>Coupon discount</span>
            <span className="green-text">-&#x20b9;600</span>
          </div> */}
          <hr></hr>
          <div className="net-amount d-flex">
            <span>Net Amount</span>
            <span>
              &#x20b9;
              {cartPrice - cartDiscount}
            </span>
          </div>
        </div>
        <button className="btn btn-success">Place order</button>
      </div>
    </>
  );
}
