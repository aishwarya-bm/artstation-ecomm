import { Link } from "react-router-dom";
import "./errorpage.css";

export function ErrorPage() {
  return (
    <>
      <section className="text-center not-found">
        <h4>Sorry this page is not found!</h4>
        <div className="d-flex children-center img-not-found">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwEtM2WsXXXHF6J3wTDK_zADDbvlJDXAA3xFyYI7wToDEVsw_86TYi9Hs9QN-V2t_mooI&usqp=CAU"
            alt="error-404"
          />
        </div>
        <Link to="/" className="fa fa-solid btn btn-secondary">
          Go back to home
        </Link>
      </section>
    </>
  );
}
