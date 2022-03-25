import { useState } from "react";
import "./signup.css";

export default function Signup() {
  //   const { state: userState, dispatch: userDispatch, validateUser } = useLogin();
  //   const { firstname, lastname, email, password, mobile } = userState.user;
  const changeHandler = event => {
    // event.preventDefault();
    // return userDispatch({ type: "USER_FORM", payload: event.target });
  };
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = e => {
    e.preventDefault();
    setShowPassword(() => (showPassword ? false : true));
  };

  return (
    <>
      <section className="signup-section d-grid" id="signup-section">
        <h3 className="text-center">Sign-up</h3>
        <form className=" d-grid grid-gap" onSubmit={e => createUser(e)}>
          <div className="d-grid">
            <label htmlFor="firstname">
              First name
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              required
              type="text"
              placeholder="enter your first name"
              id="firstname"
              name="firstname"
              //   value={firstname}
              onChange={e => changeHandler(e)}
            />
          </div>
          <div className="d-grid">
            <label htmlFor="lastname">
              Last name
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              required
              type="text"
              placeholder="enter your last name"
              id="lastname"
              name="lastname"
              //   value={lastname}
              onChange={e => changeHandler(e)}
            />
          </div>
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
            {/* {userState.err.email && (
              <div className="error-message">{userState.err.email} </div>
            )} */}
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
                // disabled={password ? false : true}
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
          </div>

          <div className="d-grid">
            <label>
              Mobile
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              required
              type="number"
              placeholder="enter your password"
              name="mobile"
              //   value={mobile}
              onChange={e => changeHandler(e)}
            />

            {/* {userState.err.phone && (
              <div className="error-message">{userState.err.phone} </div>
            )} */}
          </div>
          <button className="btn btn-secondary">SIGNUP</button>
        </form>
        <button
          className="btn btn-link create-account-link"
          //   onClick={() => userDispatch({ type: "LOGIN_ACCOUNT_LINK" })}
        >
          <i> Have an account? Login &nbsp;</i>
          <i className="fa fa-solid fa-angle-right"></i>
        </button>
      </section>
    </>
  );
}
