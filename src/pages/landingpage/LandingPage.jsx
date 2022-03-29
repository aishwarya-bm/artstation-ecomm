import { useState } from "react";
import Header from "../../components/header/Header";
import Signin from "../../components/signup/Signin";
import Signup from "../../components/signup/Signup";

export default function LandingPage() {
  const [showAlert, setShowAlert] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  return (
    <div className="signup-body">
      <Header showSearchBox={false} />

      <main className="signup-container children-center">
        {isSignUp ? (
          <Signup
            setShowAlert={setShowAlert}
            setIsSignUp={setIsSignUp}
            setAlertMsg={setAlertMsg}
          />
        ) : (
          <Signin
            setIsSignUp={setIsSignUp}
            setShowAlert={setShowAlert}
            setAlertMsg={setAlertMsg}
          />
        )}
      </main>
      <div className="d-flex children-center" style={{ bottom: "20px" }}>
        {showAlert && (
          <div className="alert alert-danger text-center">
            <i className="fa fa-regular fa-exclamation"></i> &nbsp; {alertMsg}
          </div>
        )}
      </div>
    </div>
  );
}
