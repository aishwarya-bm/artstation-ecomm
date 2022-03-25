import Header from "../../components/header/Header";
import Signin from "../../components/signup/Signin";
import Signup from "../../components/signup/Signup";

export default function LandingPage() {
  // const { state } = useLogin();
  return (
    <div className="signup-body">
      <Header />
      <main className="signup-container children-center">
        {/* this will be uncommented when context is added */}
        {/* {state.isSignUp && <Signup />}
        {!state.isSignUp && <Signin />} */}
        <Signin />
        <Signup />
      </main>
      <div className="d-flex children-center" style={{ bottom: "20px" }}>
        {/* this will be uncommented when context is added */}
        {/* {state.showAlert && state.loginFail && (
          <div className="alert alert-danger text-center">
            <i className="fa fa-regular fa-exclamation"></i> &nbsp; Incorrect
            username or password, try again
          </div>
        )}
        {state.showAlert && !state.loginFail && (
          <div className="alert alert-success text-center">
            <i className="fa fa-solid fa-check"></i>&nbsp; Sign up successful,
            login to continue.
          </div>
        )} */}
      </div>
    </div>
  );
}
