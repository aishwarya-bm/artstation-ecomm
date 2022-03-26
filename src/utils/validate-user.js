 const isEmailValid = email => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(email) ? true : false;
  };

  const isPhoneValid = phone => {
    return phone.length === 10 ? true : false;
  };

  
  const validateUser = (mobile,email) => {
    if (isPhoneValid(mobile) && !isEmailValid(email)) {
      return {
        email: "Enter a valid email id",
        phone: "",
      };
    } else if (!isPhoneValid(mobile) && isEmailValid(email)) {
      return {
        email: "",
        phone: "Enter a valid mobile number",
      };
    } else if (!isPhoneValid(mobile) && !isEmailValid(email)) {
      return {
        email: "Enter a valid email id",
        phone: "Enter a valid mobile number",
      };
    }
    return {
      phone: "",
      email: "",
    };
  };

  export {isEmailValid,isPhoneValid,validateUser}