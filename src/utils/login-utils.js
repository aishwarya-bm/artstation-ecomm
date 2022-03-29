import axios from "axios";
import Toast from "../components/toast/Toast";
import { validateUser } from "./validate-user";

const createUser = async (signupForm,setUserErr,setSignupForm,dispatchUser,setAlertMsg,setShowAlert,navigate) => {
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
        Toast({
        message: "Sign up successful.",
        type: "success",
      });
      }
      else{
        Toast({
        message: "Signup failed. Please try again.",
        type: "error",
      });
        console.log("signup failed with HTTP status",response.status)
      }
    } catch (err) {
      console.log(err)
      if (err.response && err.response.status === 422) {
        Toast({
        message: "Email already exists, use different one.",
        type: "error",
      });
      }
      else
      Toast({
        message: "Signup failed. Please try again.",
        type: "error",
      });
    }
  };

const loginUser = async (loginForm,dispatchUser,setAlertMsg,setShowAlert,navigate) => {
    try {
      const response = await axios.post("api/auth/login", loginForm);
      if (response.status === 200) {``
        localStorage.setItem("userToken", response.data.encodedToken);
        dispatchUser({ type: "SET_USER_LOGIN", payload: response.data.foundUser });
        navigate("/");
      } else {
        Toast({
        message: "Invalid credentials. Please try again.",
        type: "error",
      });     
      }
    } catch (err) {
      Toast({
        message: "Invalid credentials. Please try again.",
        type: "error",
      });
      
    }
  };

const loginFailedActions = (msg,setAlertMsg,setShowAlert) => {
    setAlertMsg(msg);
    setShowAlert(true);
    setTimeout(() => {
        setShowAlert(false);
    }, 5000);
};

const signoutUser = (dispatchCart,dispatchWishlist,dispatchUser) => {
    localStorage.removeItem("userToken");
    dispatchUser({ type: "LOGOUT_USER" });
  };

export {createUser,loginUser,loginFailedActions,signoutUser}