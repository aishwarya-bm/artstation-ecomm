export default function loginReducer(state, action) {
  console.log(action.payload);
  switch (action.type) {
    case "SIGNUP_SUCCESS": {
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    }

    case "SET_USER_LOGIN":
      return { ...state, isLoggedIn: true };
  }
}
