import { useReducer, createContext } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    profiles: [],
    profile: {},
    isLoading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Testing purposes
  const searchProfiles = async text => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await response.json();

    dispatch({
      type: "SEARCH_PROFILES",
      payload: items,
    });
  };

  //Search single profile
  const loadProfile = async login => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();

      dispatch({
        type: "GET_PROFILE",
        payload: data,
      });
    }
  };

  //clear users
  const clearProfiles = () => dispatch({ type: "CLEAR_PROFILES" });

  //set loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GithubContext.Provider
      value={{
        profiles: state.profiles,
        profile: state.profile,
        isLoading: state.loading,
        searchProfiles,
        clearProfiles,
        loadProfile,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
