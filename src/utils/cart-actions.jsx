import useAxios from "../hooks/useAxios";

const getCart = () => {
  const config = {
    url: "/api/user/cart",
    body: {},
    header: { authorization: localStorage.getItem("userToken") },
    method: "get",
  };
  const { response, err } = useAxios(config);
  console.log(response, err);
};
