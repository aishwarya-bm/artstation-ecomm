import { useState } from "react";
import axios from "axios";

// NOTE: This is not being used anywhere
// TODO: create useAxios hook for all API calls
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
        setResponse(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { asyncFn, response, err };
}
