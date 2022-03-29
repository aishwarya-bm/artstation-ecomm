import "../../App.css";
import homepage from "../../assets/homepage.jpg";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Categories from "../../components/categories/Categories";
import "./home.css";
import { useFilterProducts } from "../../contexts/filter-context/filter-context";

export default function Home() {
  const { dispatch: dispatchFilter } = useFilterProducts();
  const navigate = useNavigate();
  return (
    <div>
      <Header showSearchBox={false} />

      <main>
        <div className="p-rel">
          <img src={homepage} className="img-rsp home-img" alt="home-img" />
          <div className="home-welcome text-center p-abs">
            <h3>WELCOME TO ARTSTATION</h3>
            <button
              className="fa fa-solid btn btn-secondary"
              onClick={() => {
                dispatchFilter({ type: "CLEAR_FILTER" });
                navigate("/productlist");
              }}
            >
              SHOP NOW
            </button>
          </div>
        </div>
        <Categories />
      </main>
    </div>
  );
}
