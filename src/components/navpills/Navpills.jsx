import { Link } from "react-router-dom";
import { useCart, useLogin } from "../../contexts/index-context";
import { signoutUser } from "../../utils/login-utils";

export default function Navpills() {
  const { stateCart, dispatchCart } = useCart();
  const { dispatchUser } = useLogin();

  return (
    <>
      <div className="nav-pills d-flex">
        <ul className="list list-no-bullet children-center">
          {!localStorage.userToken && (
            <li className="list-item">
              <Link to="/signup" className="btn btn-link nav-btn ">
                LOGIN
              </Link>
            </li>
          )}
          <li className="list-item nav-item">
            <Link to="/" className="fa fa-solid fa-home"></Link>
          </li>
          <li className="list-item nav-item">
            <span className="badge-icon p-rel">
              <Link to="/wishlist">
                <i className="fa fa-solid fa-heart nav-btn"></i>
              </Link>
              {/* {wishlistState.size > 0 && (
                <span className="badge">{wishlistState.size}</span>
              )} */}
            </span>
          </li>
          <li className="list-item nav-item">
            <span className="badge-icon p-rel">
              <Link to="/cart">
                <i className="fa fa-shopping-cart nav-btn"></i>
              </Link>
              {stateCart.cartSize > 0 && (
                <span className="badge">{stateCart.cartSize}</span>
              )}
            </span>
          </li>
        </ul>
        {localStorage.userToken && (
          <Link
            to="/profile"
            className="fa fa-user btn btn-link nav-btn"
          ></Link>
        )}
        {localStorage.userToken && (
          <Link to="/signup">
            <i
              className="fa fas fa-sign-out-alt btn btn-link nav-btn"
              onClick={() => signoutUser(dispatchCart, dispatchUser)}
            ></i>
          </Link>
        )}
      </div>
    </>
  );
}
