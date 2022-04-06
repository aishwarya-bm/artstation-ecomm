import { Link } from "react-router-dom";
import { Header } from "../../components";
import "./profile.css";

export function Profile() {
  return (
    <>
      <Header />
      <section className="text-center page-under-construction">
        <h4>Sorry this page is under construction!</h4>
        <div className="d-flex children-center img-not-found">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-dT7sdkALauFxRvo_fHI2PajmHx_PYR5DbmiNe7aCJvVAOmwM2wIZwVRpv2A33MwwFY&usqp=CAU"
            alt="under-construction"
          />
        </div>
        <Link to="/" className="fa fa-solid btn btn-secondary">
          Go back to home
        </Link>
      </section>
    </>
  );
}
