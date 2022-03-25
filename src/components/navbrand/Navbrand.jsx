import { Link } from "react-router-dom";
import "./navbrand.css";

export default function Navbrand() {
  return (
    <>
      <div className="nav-brand d-flex">
        <button className="fa fa-bars btn btn-link nav-btn btn-modal-alert"></button>
        <Link to="/">
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
        </Link>
      </div>
    </>
  );
}
