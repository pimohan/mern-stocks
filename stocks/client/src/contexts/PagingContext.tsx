import { createContext, useContext, useState } from "react";

import { DEFAULT_PAGE, ROWS } from "../constants/PagingConstants";
import { SearchContext } from "./SearchContext";

/**
 * Stores Pagging information states shared among table & card view components
 */
export const PagingContext = createContext({
  rowCount: 0,
  lazyParams: {
    first: 0,
    rows: ROWS,
    page: DEFAULT_PAGE,
  },
  onPage: (event: any) => {},
});

export const PagingProvider: React.FC = ({ children }) => {
  const { key, startDate, endDate, loadLazyData } = useContext(SearchContext);
  const [rowCount, setRowCount] = useState(ROWS);
  const [lazyParams, setLazyParams] = useState({
    first: 0,
    rows: ROWS,
    page: 1,
  });

  const onPage = (event: any) => {
    let _lazyParams = { ...lazyParams, ...event };

    setLazyParams(_lazyParams);
    setRowCount(event.rows);
    loadLazyData(key, +event.page + 1, event.rows, startDate, endDate);
  };

  return (
    <PagingContext.Provider value={{ rowCount, lazyParams, onPage }}>
      {children}
    </PagingContext.Provider>
  );
};
