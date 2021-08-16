import React from "react";

interface NoDataProps {
  condition: Object;
  text: string;
}

/**
 * Shows no data found when API returns empty data
 * @param param0 text, condition
 * @returns NoData Component
 */
export const NoData = ({ text, condition }: NoDataProps) => {
  return (
    <React.Fragment>
      {condition ? <h3>No history found for {text}.</h3> : null}
    </React.Fragment>
  );
};
