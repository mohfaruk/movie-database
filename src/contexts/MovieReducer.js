export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        faves: [action.payload, ...state.watchlist],
      };
    case "REMOVE_MOVIE":
      return {
        ...state,
        faves: state.faves.filter(movie => movie.id !== action.payload),
      };
    default:
      return state;
  }
};
