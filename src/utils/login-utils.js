import axios from "axios";
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
      }
      else{
        console.log("signup incorrect status",response.status)
      }
    } catch (err) {
      console.log("signup catch",err)
      if (err.response && err.response.status === 422) {
        const msg = "Email already exists, use different one."
        loginFailedActions(msg,setAlertMsg,setShowAlert)
      }
      
    }
  };

const loginUser = async (loginForm,dispatchUser,setAlertMsg,setShowAlert,navigate) => {
    try {
      const response = await axios.post("api/auth/login", loginForm);
      if (response.status === 200) {
        localStorage.setItem("userToken", response.data.encodedToken);
        dispatchUser({ type: "SET_USER_LOGIN", payload: response.data.foundUser });
        navigate("/");
      } else {
        const msg = "Incorrect username or password, try again."
        loginFailedActions(msg,setAlertMsg,setShowAlert);
        console.log("login incorrect status",response.status)
      }
    } catch (err) {
      console.log("login catch",err)
      const msg = "Incorrect username or password, try again."
        loginFailedActions(msg,setAlertMsg,setShowAlert);
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
    dispatchCart({ type: "RESET_CART" });
    dispatchWishlist({type:"RESET_WISHLIST"});
    dispatchUser({ type: "LOGOUT_USER" });
  };

export {createUser,loginUser,loginFailedActions,signoutUser}