import axios from "axios";
import { LOGIN_SUCCESS, USER_LOADED, LOGOUT } from "./types";
import setAuthToken from "../utils/setAuthToken";

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  console.log(localStorage.token);
  try {
    const res = await axios.get(
      "https://recruitment.ultimate.systems/users/me"
    );

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    /*dispatch({
          type: AUTH_ERROR,
        });*/
    console.log("blad loadowania");
  }
};

export const login = (identifier, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ identifier, password });

  try {
    const res = await axios.post(
      "https://recruitment.ultimate.systems/auth/local",
      body,
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    /*const errors = error.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
      }
  
      dispatch({
        type: LOGIN_FAIL,
      });*/
    console.log("blad logowania");
  }
};

export const logout = () => (dispatch) => {
  if (localStorage.token) {
    localStorage.removeItem("token");
  }
  dispatch({
    type: LOGOUT,
  });
};
