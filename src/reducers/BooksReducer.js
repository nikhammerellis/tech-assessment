import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR
} from "../actions/types";

const INITIAL_STATE = {
  booksLoading: false,
  books: [],
  error: ""
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        booksLoading: true
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        booksLoading: false,
        books: action.payload
      };
    case FETCH_BOOKS_ERROR:
      return {
        booksLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
