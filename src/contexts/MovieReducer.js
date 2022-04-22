export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_MOVIE":
      return {
        ...state,
        watchlist: state.watchlist.filter(movie => movie.id !== action.payload),
      };
    default:
      return state;
  }
};
