import { useState } from "react";
import { useLogin } from "../../contexts/login-context/login-context";
import { useNavigate } from "react-router-dom";
import { validateUser } from "../../utils/validate-user";
import "./signup.css";
import axios from "axios";

export default function Signup({ setShowAlert, setIsSignUp, setAlertMsg }) {
  const { dispatchUser } = useLogin();
  const [userErr, setUserErr] = useState({
    phone: "",
    email: "",
  });
  const [signupForm, setSignupForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    mobile: "",
  });
  const navigate = useNavigate();
  const changeHandler = event => {
    event.preventDefault();
    setSignupForm(() => ({
      ...signupForm,
      [event.target.name]: event.target.value,
    }));
  };
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = e => {
    e.preventDefault();
    setShowPassword(() => (showPassword ? false : true));
  };

  const createUser = async signupForm => {
    const userErrors = validateUser(signupForm.mobile, signupForm.email);
    setUserErr(userErrors);
    if (userErrors["phone"] || userErrors["email"]) {
      return;
    }
    try {
      const response = await axios.post("api/auth/signup", signupForm);
      if (response.status === 201) {
        setSignupForm({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          mobile: "",
        });
        setUserErr({ email: "", phone: "" });
        dispatchUser({
          type: "SIGNUP_SUCCESS",
          payload: response.data.createdUser,
        });
        localStorage.setItem("userToken", response.data.encodedToken);
        navigate("/");
      } else {
      }
    } catch (e) {
      if (e.response && e.response.status === 422) {
        setAlertMsg("Email already exists, use different one.");
        setShowAlert(true);

        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
      }
    }
  };

  const handleSignupSubmit = e => {
    e.preventDefault();
    createUser(signupForm);
  };

  return (
    <>
      <section className="signup-section d-grid" id="signup-section">
        <h3 className="text-center">Sign-up</h3>
        <form
          className=" d-grid grid-gap"
          onSubmit={e => handleSignupSubmit(e)}
        >
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
              value={signupForm.firstname}
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
              id="signupForm.lastname"
              name="lastname"
              value={signupForm.lastname}
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
              value={signupForm.email}
              onChange={e => changeHandler(e)}
            />
            {userErr.email && (
              <div className="error-message">{userErr.email} </div>
            )}
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
              value={signupForm.password}
              onChange={e => changeHandler(e)}
            />
            {showPassword ? (
              <button
                disabled={signupForm.password ? false : true}
                className="fa fa-solid fa-eye btn btn-link"
                style={{ position: "absolute", right: "0px", top: "20px" }}
                onClick={e => toggleShowPassword(e)}
              ></button>
            ) : (
              <button
                disabled={signupForm.password ? false : true}
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
              value={signupForm.mobile}
              onChange={e => changeHandler(e)}
            />

            {userErr.phone && (
              <div className="error-message">{userErr.phone} </div>
            )}
          </div>
          <button className="btn btn-secondary">SIGNUP</button>
        </form>
        <button
          className="btn btn-link create-account-link"
          onClick={() => setIsSignUp(false)}
        >
          <i> Have an account? Login &nbsp;</i>
          <i className="fa fa-solid fa-angle-right"></i>
        </button>
      </section>
    </>
  );
}
