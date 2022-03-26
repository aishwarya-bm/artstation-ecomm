import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../contexts/login-context/login-context";
import "./signup.css";
import axios from "axios";

export default function Signin({ setIsSignUp, setShowAlert, setAlertMsg }) {
  const { dispatchUser } = useLogin();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = event => {
    event.preventDefault();
    setLoginForm(() => ({
      ...loginForm,
      [event.target.name]: event.target.value,
    }));
  };

  const toggleShowPassword = e => {
    e.preventDefault();
    setShowPassword(() => (showPassword ? false : true));
  };

  const loginFailedActions = () => {
    setAlertMsg("Incorrect username or password, try again.");
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const loginUser = async loginForm => {
    try {
      const response = await axios.post("api/auth/login", loginForm);
      if (response.status === 200) {
        localStorage.setItem("userToken", response.data.encodedToken);
        dispatchUser({ type: "SET_USER_LOGIN" });
        navigate("/");
      } else {
        loginFailedActions();
      }
    } catch (err) {
      loginFailedActions();
    }
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    loginUser(loginForm);
  };

  return (
    <>
      <section className="signup-section d-grid grid-gap" id="login-section">
        <h3 className="text-center">Login</h3>
        <form className="d-grid grid-gap" onSubmit={e => handleLoginSubmit(e)}>
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
              value={loginForm.email}
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
              value={loginForm.password}
              onChange={e => changeHandler(e)}
            />
            {showPassword ? (
              <button
                disabled={loginForm.password ? false : true}
                className="fa fa-solid fa-eye btn btn-link"
                style={{ position: "absolute", right: "0px", top: "20px" }}
                onClick={e => toggleShowPassword(e)}
              ></button>
            ) : (
              <button
                disabled={loginForm.password ? false : true}
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
          onClick={() => {
            setIsSignUp(true);
          }}
        >
          <i>Create new account &nbsp;</i>
          <i className="fa fa-solid fa-angle-right"></i>
        </button>
      </section>
    </>
  );
}
