import { useEffect, useState, useCallback, useRef } from "react";
import { SearchUser } from "../api";
import { UserType } from "../types/UserData";
import { useDebounce } from "./useDebounce";

export const useUserSearch = (query: string, delay: number, page: number) => {
  const [users, setUsers] = useState<Array<UserType>>([]);
  const [totalCount, setTotalCount] = useState<number>(0)
  const [loading, setLoading] = useState(false);
  const { debounce } = useDebounce("search-user");
  const pageSize = useRef(21).current;

  const fetchUser = useCallback(
    (q: string) => {
      setLoading(true);
      SearchUser({ q, page, per_page: pageSize })
        .then((data) => {
          setUsers(data.data.items);
          setTotalCount(data.data.total_count);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    },
    [page, pageSize]
  );

  useEffect(() => {
    if (query) {
      debounce(() => fetchUser(query), delay)();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, delay, page]);

  return { fetchUser, users, loading, totalCount, pageSize };
};
