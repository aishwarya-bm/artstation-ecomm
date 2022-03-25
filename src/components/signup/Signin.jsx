import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
export default function Signin() {
  //   const { state: userState, dispatch: userDispatch } = useLogin();
  //   const { email, password } = userState.user;
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const changeHandler = event => {
    event.preventDefault();
    // return userDispatch({ type: "USER_FORM", payload: event.target });
  };

  const toggleShowPassword = e => {
    e.preventDefault();
    console.log("in toggle pwd");
    setShowPassword(() => (showPassword ? false : true));
  };

  return (
    <>
      <section className="signup-section d-grid grid-gap" id="login-section">
        <h3 className="text-center">Login</h3>
        <form
          className="d-grid grid-gap"
          // onSubmit={e => loginUser(e)}
        >
          <div className="d-grid">
            <label>
              Email
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              required
              type="text"
              placeholder="enter your username"
              name="email"
              //   value={email}
              onChange={e => changeHandler(e)}
            />
          </div>
          <div className="d-grid p-rel">
            <label>
              Password
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="enter your password"
              name="password"
              //   value={password}
              onChange={e => changeHandler(e)}
            />
            {showPassword && (
              <button
                disabled={password ? false : true}
                className="fa fa-solid fa-eye btn btn-link"
                style={{ position: "absolute", right: "0px", top: "20px" }}
                onClick={e => toggleShowPassword(e)}
              ></button>
            )}
            {!showPassword && (
              <button
                // disabled={password ? false : true}
                className="fa fa-solid fa-eye-slash btn btn-link"
                style={{ position: "absolute", right: "0px", top: "20px" }}
                onClick={e => toggleShowPassword(e)}
              ></button>
            )}
            <div className="helper-message hide">Helper message</div>
            <div className="error-message hide">Wrong Password. Try again.</div>
          </div>

          <button className="btn btn-secondary">LOGIN</button>
        </form>
        <button
          className="btn btn-link create-account-link"
          //   onClick={() => {
          //     console.log("inside CREATE_ACCOUNT_LINK");
          //     userDispatch({ type: "CREATE_ACCOUNT_LINK" });
          //   }}
        >
          <i>Create new account &nbsp;</i>
          <i className="fa fa-solid fa-angle-right"></i>
        </button>
      </section>
    </>
  );
}
