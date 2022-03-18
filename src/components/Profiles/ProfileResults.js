import { useContext } from "react";
import GithubContext from "../../contexts/github/GithubContext";
import Spinner from "../Layouts/Spinner";
import ProfileItem from "./ProfileItem";

function ProfileResults() {
  const { profiles, isLoading } = useContext(GithubContext);

  // useEffect(() => {
  //   fetchProfiles();
  // }, []);

  if (!isLoading) {
    return (
      <div className="grid gird-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {profiles.map(profile => (
          <ProfileItem key={profile.id} profile={profile} />
        ))}
      </div>
    );
  } else {
    return (
      <h3>
        <Spinner />
      </h3>
    );
  }
}

export default ProfileResults;
