function GithubReducer(state, action) {
  switch (action.type) {
    case "SEARCH_PROFILES":
      return {
        ...state,
        profiles: action.payload,
        loading: false,
      };
    case "GET_PROFILE":
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_PROFILES":
      return {
        ...state,
        profiles: [],
      };
    case "GET_REPOS": {
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
}

export default GithubReducer;
