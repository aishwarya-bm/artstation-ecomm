import axios from "axios";
import {Toast} from "../components";
import { validateUser } from "./validate-user";

const createUser = async (signupForm,setUserErr,setSignupForm,dispatchUser,navigate) => {
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
      }
    } catch (err) {
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

const loginUser = async (loginForm,dispatchUser,navigate) => {
    try {
      const response = await axios.post("api/auth/login", loginForm);
      if (response.status === 200) {``
        localStorage.setItem("userToken", response.data.encodedToken);
        dispatchUser({ type: "SET_USER_LOGIN", payload: response.data.foundUser });
        navigate("/");
        Toast({
        message: "Signed in successfully.",
        type: "success",
      });
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

const signoutUser = (dispatchUser) => {
    localStorage.removeItem("userToken");
    dispatchUser({ type: "LOGOUT_USER" });
  };

export {createUser,loginUser,signoutUser}