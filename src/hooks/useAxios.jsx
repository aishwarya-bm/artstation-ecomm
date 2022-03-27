import { useState } from "react";
import axios from "axios";

export default function useAxios() {
  const [response, setResponse] = useState([]);
  const [err, setErr] = useState([]);
  const asyncFn = async ({ url, body, header, method }) => {
    try {
      if (method === "post") {
        const response = await axios.post(url, body, { headers: header });
        setResponse(response);
      } else if (method === "get") {
        const response = await axios.get(url, { headers: header });
        console.log("await", response);
        setResponse(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return asyncFn;
}
