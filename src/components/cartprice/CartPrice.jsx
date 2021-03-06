import { useCart } from "../../contexts/index-context";
import { getCheckoutDetails } from "../../utils/cart-checkout";
import { Toast } from "../index";
import "./cartprice.css";
export function CartPrice() {
  const { cart, cartSize } = useCart();
  const { price, discount, netAmount } = getCheckoutDetails(cart);

  return (
    <>
      <div className="cart-price children-stacked">
        <div className="children-stacked">
          <h5>Price details </h5>
          <hr></hr>

          <div className="total-price d-flex">
            <span>Total MRP {`(${cartSize} items)`} </span>
            <span>
              &#x20b9;
              {price}
            </span>
          </div>

          <div className="discount-price d-flex">
            <span>Discount on MRP</span>
            <span className="green-text">
              -&nbsp; &#x20b9;
              {discount}
            </span>
          </div>
          {/* TODO: To be implemented in future  
          <div className="coupon-name d-flex">
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
              {price - discount}
            </span>
          </div>
        </div>
        <button
          className="btn btn-success"
          onClick={() => {
            Toast({
              message: "Your order is placed successfully.",
              type: "success",
            });
          }}>
          Place order
        </button>
      </div>
    </>
  );
}
