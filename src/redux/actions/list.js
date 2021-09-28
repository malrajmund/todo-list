import axios from "axios";
import {
  CREATE_LIST,
  EDIT_LIST,
  DELETE_LIST,
  ADD_TASK,
  LIST_ERROR,
  GET_LISTS,
} from "./types";
import { setAlert } from "./alert";

export const createList = (listData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(listData);
  try {
    const res = await axios.post(
      "https://recruitment.ultimate.systems/to-do-lists",
      body,
      config
    );
    console.log(res.data);
    dispatch({
      type: CREATE_LIST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LIST_ERROR,
    });
    dispatch(setAlert("Creating new list gone wrong!", "danger", 3000));
  }
};

export const getLists = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(
      "https://recruitment.ultimate.systems/to-do-lists",
      config
    );
    console.log(res.data);
    dispatch({
      type: GET_LISTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LIST_ERROR,
    });
    dispatch(setAlert(err.message, "danger", 3000));
  }
};
