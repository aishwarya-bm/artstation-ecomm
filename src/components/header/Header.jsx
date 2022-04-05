import { Navbrand, Navpills, Search } from "../index";
import "./header.css";

export function Header({ showSearchBox }) {
  return (
    <div>
      <nav className="nav-container d-flex">
        <Navbrand />
        {showSearchBox && <Search />}
        <Navpills />
      </nav>
    </div>
  );
}
