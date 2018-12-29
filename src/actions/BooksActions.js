import axios from "axios";
import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR
} from "./types";

export const fetchBooks = () => {
  return dispatch => {
    dispatch({ type: FETCH_BOOKS_REQUEST });

    axios.get('https://www.googleapis.com/books/v1/volumes?q=tech').then(res => {
      dispatch({ type: FETCH_BOOKS_SUCCESS, payload: res.data.items });
    }).catch(error => {
      console.log(error);
      dispatch({ type: FETCH_BOOKS_ERROR, payload: error });
    });
  }
}
