import { useState, useContext } from "react";
import GithubContext from "../../contexts/github/GithubContext";
import AlertContext from "../../contexts/alert/AlertContext";
//import { searchProfiles } from "../../contexts/github/GithubContext";

function ProfileSearch() {
  const [text, setText] = useState("");

  const { profiles, searchProfiles, clearProfiles } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = event => setText(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();

    if (text === "") {
      setAlert("Please enter something...", "error");
    } else {
      searchProfiles(text);
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 ">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-slate-50 input-lg text-black rounded"
                placeholder="Search Movie/TV Show..."
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded w-36 btn btn-lg"
              >
                Find
              </button>
            </div>
          </div>
        </form>
      </div>
      {profiles.length > 0 && (
        <div>
          <button
            className="btn btn-lg rounded btn-ghost"
            onClick={clearProfiles}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileSearch;
