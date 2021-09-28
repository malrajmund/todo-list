import {
  CREATE_LIST,
  EDIT_LIST,
  DELETE_LIST,
  ADD_TASK,
  LIST_ERROR,
  GET_LISTS,
} from "../actions/types";

const initialState = {
  task: [],
  list: [],
  loading: true,
};

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_LIST:
      return {
        task: [...payload.task],
        loading: false,
      };
    case GET_LISTS:
      return {
        list: [...payload],
        loading: false,
      };
    case LIST_ERROR: {
      return {
        task: [],
        loading: false,
      };
    }
    default:
      return state;
  }
}
