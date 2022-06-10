import { Link } from "react-router-dom";
import { useCart, useLogin, useWishlist } from "../../contexts/index-context";
import { signoutUser } from "../../utils/login-utils";

export function Navpills() {
  const { cartSize } = useCart();
  const { stateUser, dispatchUser, isLoggedIn } = useLogin();
  const { wishlistSize } = useWishlist();

  return (
    <>
      <div className="nav-pills d-flex">
        <ul className="list list-no-bullet children-center">
          {!isLoggedIn && (
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
            <Link to="/productlist" className="fa fa-shopping-basket"></Link>
          </li>

          <li className="list-item nav-item">
            <span className="badge-icon p-rel">
              <Link to="/wishlist">
                <i className="fa fa-solid fa-heart nav-btn"></i>
              </Link>
              {isLoggedIn && wishlistSize > 0 && <span className="badge">{wishlistSize}</span>}
            </span>
          </li>
          <li className="list-item nav-item">
            <span className="badge-icon p-rel">
              <Link to="/cart">
                <i className="fa fa-shopping-cart nav-btn"></i>
              </Link>
              {isLoggedIn && cartSize > 0 && <span className="badge">{cartSize}</span>}
            </span>
          </li>
        </ul>
        {isLoggedIn && <Link to="/profile" className="fa fa-user btn btn-link nav-btn"></Link>}
        {isLoggedIn && (
          <Link to="/signup">
            <i className="fa fas fa-sign-out-alt btn btn-link nav-btn" onClick={() => signoutUser(dispatchUser)}></i>
          </Link>
        )}
      </div>
    </>
  );
}
