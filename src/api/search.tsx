import http from "../http";
import { objectToQueryString } from "../utils";
import UserData from "../types/UserData";

type QueryType = {
  per_page: number;
  page: number;
  q: string;
};

export const SearchUser = (queryObj: QueryType) =>
  http.get<Array<UserData>>(`/search/users?${objectToQueryString(queryObj)}`);
