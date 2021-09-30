import axios from "axios";
import {
  CREATE_LIST,
  EDIT_LIST,
  DELETE_LIST,
  LIST_ERROR,
  GET_LISTS,
  SORT_LISTS,
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
    dispatch({
      type: CREATE_LIST,
      payload: res.data,
    });
    dispatch(setAlert(`List "${res.data.name}" created!`, "success", 3000));
  } catch (err) {
    dispatch({
      type: LIST_ERROR,
    });
    dispatch(setAlert(err.message, "danger", 3000));
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

export const editList = (id, listData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { name } = listData;
  const task = listData.task.map(({ id, ...rest }) => rest);
  const body = JSON.stringify({ name, task });
  try {
    const res = await axios.put(
      `https://recruitment.ultimate.systems/to-do-lists/${id}`,
      body,
      config
    );
    dispatch({
      type: EDIT_LIST,
      payload: res.data,
    });
    dispatch(setAlert(`List "${res.data.name}" edited!`, "success", 3000));
  } catch (err) {
    dispatch({
      type: LIST_ERROR,
    });
    dispatch(setAlert(err.message, "danger", 3000));
  }
};

export const deleteList = (id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.delete(
      `https://recruitment.ultimate.systems/to-do-lists/${id}`,
      config
    );
    dispatch({
      type: DELETE_LIST,
      payload: res.data,
    });
    dispatch(setAlert(`List "${res.data.name}" deleted!`, "info", 3000));
  } catch (err) {
    dispatch({
      type: LIST_ERROR,
    });
    dispatch(setAlert(err.message, "danger", 3000));
  }
};

export const sortLists = (option) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(
      `https://recruitment.ultimate.systems/to-do-lists?_sort=${option}`,
      config
    );
    dispatch({
      type: SORT_LISTS,
      payload: res.data,
    });
    dispatch(setAlert(`List sorted by ${option}!`, "info", 3000));
  } catch (err) {
    dispatch({
      type: LIST_ERROR,
    });
    dispatch(setAlert(err.message, "danger", 3000));
  }
};
