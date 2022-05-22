import React, { ChangeEvent, useState } from "react";
import Pagination from "../components/Pagination";
import UserItem from "../components/UserItem";
import { useUserSearch } from "../hooks/useUserSearch";

const Home = (): React.ReactElement => {

  const [query, setQuery] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const { users, totalCount, pageSize } = useUserSearch(query, 1000, page)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPage(1)
    setQuery(e.target.value)
  }

  return (
    <div className="container-fluid mt-3">
      <div className="card">
        <input
          type="text"
          className="form-control"
          placeholder="Search for users"
          aria-label="Search for users"
          aria-describedby="user-search-input"
          value={query}
          onChange={handleInputChange}
        />

        <div className="card-body row">
          {users.map((user) => (
            <div className="col-md-6 col-lg-4" key={user.login}>
              <UserItem {...user} />
            </div>
          ))}
        </div>
        <Pagination totalSize={totalCount} limit={pageSize} changePage={setPage} currentPage={page} />
      </div>
    </div>
  );
};

export default Home;
