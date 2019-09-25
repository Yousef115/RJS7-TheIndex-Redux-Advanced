import axios from "axios";
import { FETCH_AUTHORS } from "./actionType";

export const fetchAuthors = () => {
  return async dispatch => {
    try {
      const res = await axios.get(
        "https://the-index-api.herokuapp.com/api/authors/"
      );
      const authors = res.data;
      dispatch({
        type: FETCH_AUTHORS,
        payload: authors
      });
    } catch (err) {}
  };
};
