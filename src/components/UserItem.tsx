import { memo } from "react";
import { UserType } from "../types/UserData";
const UserItem = ({ avatar_url, login, repos_url }: UserType) => {
  const viewRepo = () => {
    window.location.href = repos_url;
  };

  return (
    <div className="card user-item mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <img src={avatar_url} className="img-thumbnail" alt={login}></img>
          </div>
          <div className="col">
            <p>
              <strong>Username: </strong>
              {login}
            </p>
            <button onClick={viewRepo} className="btn btn-outline-primary">
              View Repo (JSON)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(UserItem);
