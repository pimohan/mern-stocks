import { createContext, useState } from "react";

import { getDate } from "../utils/Util";

/**
 * Stores Filter parameters shared among components
 */
export const FilterContext = createContext({
  periodSelectOption: "",
  setPeriodSelectOption: (value: string) => {},
  calenderStartDate: getDate(),
  calenderEndDate: getDate(),
  setCalenderStartDate: (value: Date | Date[] | undefined) => {},
  setCalenderEndDate: (value: Date | Date[] | undefined) => {},
});

export const FilterProvider: React.FC = ({ children }) => {
  const today = getDate();
  const [periodSelectOption, setPeriodSelectOption] = useState("");
  const [calenderStartDate, setCalenderStartDate] = useState<
    Date | Date[] | undefined
  >(today);
  const [calenderEndDate, setCalenderEndDate] = useState<
    Date | Date[] | undefined
  >(today);

  return (
    <FilterContext.Provider
      value={{
        periodSelectOption,
        setPeriodSelectOption,
        calenderStartDate: calenderStartDate as Date,
        calenderEndDate: calenderEndDate as Date,
        setCalenderStartDate,
        setCalenderEndDate,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
