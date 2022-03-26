import { createContext } from "react";
import { useContext, useState } from "react";
import { useReducer } from "react";
import loginReducer from "./login-reducer";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [stateUser, dispatchUser] = useReducer(loginReducer, {
    user: {},
    isLoggedIn: localStorage.getItem("userToken") ? true : false,
  });

  return (
    <>
      <LoginContext.Provider
        value={{
          stateUser,
          dispatchUser,
        }}
      >
        {children}
      </LoginContext.Provider>
    </>
  );
};

const useLogin = () => useContext(LoginContext);

export { useLogin, LoginProvider };
