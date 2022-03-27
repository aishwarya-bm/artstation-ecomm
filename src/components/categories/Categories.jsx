import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./categories.css";
import { useFilterProducts } from "../../contexts/index-context";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const { state: stateFilter, dispatch: dispatchFilter } = useFilterProducts();
  const getCategories = async () => {
    try {
      const { data } = await axios.get("/api/categories");
      setCategories(() => data.categories);
    } catch (e) {
      console.log("error occured", e);
    }
  };
  useEffect(() => getCategories(), []);
  return (
    <>
      <div>
        <h3 className="text-center">CATEGORIES</h3>
        <div className="d-grid">
          <ul className="category-container d-grid list-no-bullet">
            {categories &&
              categories?.map(({ _id, categoryName, categoryImg }) => {
                return (
                  <li key={_id}>
                    <div
                      className="card children-stacked"
                      onClick={() => {
                        dispatchFilter({
                          type: "OPEN_CATEGORY",
                          payload: categoryName,
                        });
                      }}
                    >
                      <Link to={`/productlist/${categoryName}`}>
                        <img
                          className="card-media"
                          src={categoryImg}
                          alt="card-img"
                        />
                      </Link>

                      <Link
                        to={`/productlist/${categoryName}`}
                        className="btn btn-link card-btn text-center"
                      >
                        {categoryName}
                      </Link>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
}
