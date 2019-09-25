import { FETCH_AUTHORS } from "../actions/actionType";

const initialState = {
  authors: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTHORS:
      return {
        ...state,
        authors: state.authors.concat(action.payload),
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
