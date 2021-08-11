import axios from "axios";
export const getClientInfo = (clientFirebaseId) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://sample-60722-default-rtdb.firebaseio.com/data/${clientFirebaseId}.json`
    );
    dispatch({
      type: "CLIENT-DATA",
      payload: res.data,
    });
  };
};

export const setError = () => {
  return (dispatch) => {
    dispatch({
      type: "ERROR",
      payload: "No Data Found",
    });
  };
};
