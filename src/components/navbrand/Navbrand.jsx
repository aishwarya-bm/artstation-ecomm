import { Link } from "react-router-dom";
import "./navbrand.css";

export function Navbrand() {
  return (
    <>
      <div className="nav-brand d-flex">
        <Link to="/">
          <div className="d-flex">
            <img src="https://cdn.iconscout.com/icon/free/png-48/painting-240-1126264.png" alt="logo" />
            <div className="nav-title d-flex">
              <span className="letter-1">A</span>
              <span className="letter-2">r</span>
              <span className="letter-3">t</span>
              <span className="letter-4">S</span>
              <span className="letter-5">t</span>
              <span className="letter-6">a</span>
              <span className="letter-7">t</span>
              <span className="letter-8">i</span>
              <span className="letter-9">o</span>
              <span className="letter-10">n</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
