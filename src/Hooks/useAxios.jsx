import axios from "axios";
import {useEffect, useState} from "react";
import {message} from "antd";
import {GetQueryString} from "./../Utilities/GetQueryString";

const UseAxios = ({
  method,
  endpoint = "",
  query = {},
  deps = [],
  body = null,
  errorsMessage = {404: "Not found", 400: "bad request"},
  successMessage = "",
}) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  axios.defaults.baseURL = "https://192.168.0.163:45455/api";
  // axios.defaults.headers.common["Authorization"] = "AUTH_TOKEN";
  // axios.defaults.headers.post["Content-Type"] =
  // "application/x-www-form-urlencoded";

  // interceptors
  axios.interceptors.response.use(null, (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      message.error("An unexpected error occurred");
      console.log("error", error);
    }
    return Promise.reject(error);
  });

  useEffect(() => {
    setIsLoading(true);
    axios[method](`${endpoint}${GetQueryString(query)}`, body)
      .then((res) => {
        setResponse(res?.data);
        setIsLoading(false);
      })
      .catch((ex) => {
        if (ex.response && ex.response.status === 404)
          message.error(errorsMessage["404"]);
        else if (ex.response && ex.response.status === 400)
          message.error(errorsMessage["400"]);
        setError(ex);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [...deps]); // eslint-disable-line react-hooks/exhaustive-deps

  return {response, isLoading, error};
};

export {UseAxios};

// Expected errors (404: not found, 400 : bad request) - Client errors
// - Display a specific error message
// Unexpected (network down, server down, DB down, bug in server side code )
// -log them
// - display generic error message

//============================================================================
// How to use this hook
//============================================================================

//  You need to set base URL at axios default baseURl value.

//  const {response, isLoading, error} = UseAxios({
//  endpoint: `/vehicles`,
//  query: {page: currentPage},   // all the query strings in object
//  method: "get",
//  deps: [currentPage],          // dependency state variable which trigger re-render
//  errorsMessage: {404: "Page not exists in the Database"},     // error message for expected errors
//  successMessage: "",                                          // success message
//  });
