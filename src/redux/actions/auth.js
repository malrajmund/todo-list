import axios from "axios";
import {
  LOGIN_SUCCESS,
  USER_LOADED,
  LOGOUT,
  LOGIN_FAIL,
  AUTH_ERROR,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "./types";
import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "./alert";

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(
      "https://recruitment.ultimate.systems/users/me"
    );

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
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
    dispatch({
      type: LOGIN_FAIL,
    });

    dispatch(
      setAlert(err.response.data.message[0].messages[0].message, "danger", 3000)
    );
  }
};

export const register = (username, email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const body = JSON.stringify(username, email, password);
  console.log(body);
  try {
    const res = await axios.post(
      "https://recruitment.ultimate.systems/auth/local/register",
      body,
      config
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.message,
    });
    console.log(err.response.data.message[0].messages);
    dispatch(
      setAlert(err.response.data.message[0].messages[0].message, "danger", 3000)
    );
  }
};

export const logout = () => (dispatch) => {
  if (localStorage.token) {
    localStorage.removeItem("token");
    setAuthToken();
  }
  dispatch({
    type: LOGOUT,
  });
  dispatch(setAlert("Logout successfull!", "info", 3000));
};
