import { ReactElement, useMemo, memo } from "react";
import { paginationLength } from "../utils";

type Props = {
  totalSize: number;
  limit: number;
  currentPage: number;
  changePage: (page: number) => void;
  maxSize?: number;
};

const Pagination = ({
  totalSize,
  limit,
  currentPage,
  changePage,
  maxSize,
}: Props): ReactElement => {

  const maxResults = useMemo(() => {
    if (maxSize && totalSize > maxSize) {
      return maxSize
    }
    return totalSize
  }, [totalSize, maxSize])

  const length = useMemo(
    () => paginationLength(maxResults, limit),
    [maxResults, limit]
  );

  const paginationList = useMemo(() => {
    let list = [];
    let startSlice = currentPage - 5;
    if (startSlice < 1) {
      startSlice = 1;
    }
    let endSlice = startSlice + 9;
    if (endSlice > length) {
      endSlice = length;
    }
    for (let i = startSlice; i <= endSlice; i++) {
      list.push(
        <li
          className={`page-item ${currentPage === i && "active"}`}
          onClick={() => changePage(i)}
        >
          <span className="page-link">{i}</span>
        </li>
      );
    }
    return list;
  }, [currentPage, length, changePage]);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item" onClick={() => changePage(1)}>
          <span className="page-link">First</span>
        </li>
        <li
          className="page-item"
          onClick={() => {
            if (currentPage - 1 > 0) {
              changePage(currentPage - 1);
            }
          }}
        >
          <span className="page-link">Previous</span>
        </li>
        {paginationList}
        <li
          className="page-item"
          onClick={() => {
            if (currentPage + 1 <= length) {
              changePage(currentPage - 1);
            }
          }}
        >
          <span className="page-link">Next</span>
        </li>
        <li className="page-item" onClick={() => changePage(length)}>
          <span className="page-link">Last</span>
        </li>
      </ul>
    </nav>
  );
};

export default memo(Pagination);
