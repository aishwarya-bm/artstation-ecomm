import "../../App.css";
import { Header, Toast } from "../../components";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useCart, useLogin, useWishlist } from "../../contexts/index-context";
import { addToCart } from "../../utils/cartitem-actions";
import { addToWishList, removeFromWishlist } from "../../utils/wishlist-actions";

export function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const { cart, dispatchCart } = useCart();
  const { wishlist, dispatchWishlist } = useWishlist();
  const { isLoggedIn } = useLogin();
  const navigate = useNavigate();
  async function getProductById() {
    try {
      const { data, status } = await axios.get(`/api/products/${productId}`);
      if (status === 200) {
        setProduct(() => data.product);
      } else {
        Toast({
          message: "Some error occured, please try again later",
          type: "error",
        });
      }
    } catch (e) {
      Toast({
        message: "Some error occured, please try again later",
        type: "error",
      });
    }
  }

  useEffect(() => {
    getProductById();
  }, []);
  useEffect(() => {
    document.title = "Product | Art station";
  }, []);

  const isProductInCart = p_id => {
    return cart?.find(p => p._id === p_id);
  };

  const isProductInWishlist = p_id => {
    return wishlist?.find(p => p._id === p_id);
  };
  return (
    <div>
      <Header showSearchBox={false} />

      <button
        className="btn btn-link"
        onClick={() => {
          navigate("/productlist");
        }}>
        Back
      </button>

      <h3 className="text-center single-product-title">{product?.title}</h3>

      <main className="single-product-main">
        <div className="d-flex single-product">
          <img className="single-product-img" src={product?.product_img} alt={`product ${product?._id}`} />
          <div className="d-flex children-stacked gap-sm">
            <p>Category : {product?.categoryName?.charAt(0).toUpperCase() + product?.categoryName?.substring(1)}</p>
            <p>
              Current price : <span className="curr-price">₹{product?.curr_price}</span>
            </p>
            <p>
              Original price : <span className="prev-price text-linethrough">₹{product?.orig_price}</span>
            </p>

            <p>
              Rating : {product?.rating} &nbsp;
              <i className="fa fa-solid fa-star"></i>
            </p>
            <div className="d-flex children-stacked grid-gap">
              {isProductInCart(product?._id) ? (
                <button
                  className="fa fa-shopping-cart btn btn-light"
                  onClick={() => {
                    navigate("/cart");
                  }}>
                  &nbsp; Go to cart
                </button>
              ) : (
                <button
                  className="fa fa-shopping-cart btn btn-secondary"
                  onClick={() => addToCart(isLoggedIn, product, dispatchCart, navigate)}>
                  &nbsp; Add to cart
                </button>
              )}

              {isProductInWishlist(product?._id) ? (
                <button
                  className="fa fa-solid fa-heart btn btn-light"
                  onClick={() => removeFromWishlist(isLoggedIn, product, dispatchWishlist, navigate)}>
                  &nbsp; Remove from wishlist
                </button>
              ) : (
                <button
                  className="fa fa-solid fa-heart btn btn-secondary"
                  onClick={() => addToWishList(isLoggedIn, product, dispatchWishlist, navigate)}>
                  &nbsp; Move to wishlist
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
