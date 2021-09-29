import {
  CREATE_LIST,
  EDIT_LIST,
  DELETE_LIST,
  LIST_ERROR,
  GET_LISTS,
  SORT_LISTS,
} from "../actions/types";

const initialState = {
  list: [],
  loading: true,
};

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_LIST:
      return {
        ...state,
        list: [...state.list, payload],
        loading: false,
      };
    case GET_LISTS:
      return {
        ...state,
        list: [...payload],
        loading: false,
      };
    case EDIT_LIST:
      return {
        ...state,
        list: [...state.list.filter((item) => item.id !== payload.id), payload],
        loading: false,
      };
    case LIST_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    case DELETE_LIST: {
      return {
        ...state,
        list: [...state.list.filter((item) => item.id !== payload.id)],
        loading: false,
      };
    }
    case SORT_LISTS: {
      return {
        ...state,
        list: [...payload],
        loading: false,
      };
    }
    default:
      return state;
  }
}
