import React, { useContext } from "react";

import { Card } from "primereact/card";
import { Paginator } from "primereact/paginator";

import { AppContext } from "../../contexts/AppContext";
import { SearchContext } from "../../contexts/SearchContext";
import { PagingContext } from "../../contexts/PagingContext";

import { NoData } from "../NoData/NoData";

import { cardBgColors } from "../../constants/CardConstants";
import {
  getFormattedDate,
  getFormattedNumber,
  getNumberByFixedDecimal,
} from "../../utils/Util";
import { rowsPerPageOptions } from "../../utils/TableUtil";

import "./CardView.css";

/**
 * To show the card list view of stock hsitory items
 * @returns CardView Componet
 */
export const CardView = () => {
  const { tableView } = useContext(AppContext);
  const { key, data, totalRecords } = useContext(SearchContext);
  const { rowCount, lazyParams, onPage } = useContext(PagingContext);

  return (
    <div className="Card-View">
      {!tableView && data && data.length > 0 ? (
        <React.Fragment>
          <div className="Cards-Container">
            {data.map((history: any, index: number) => (
              <Card
                key={history._id}
                title={getFormattedDate(history.Date)}
                style={{
                  width: "19.2rem",
                  height: "10rem",
                  marginBottom: "1em",
                  marginRight: "1em",
                  maxWidth: "24rem",
                  backgroundColor: cardBgColors[index % 12],
                  color: "white",
                }}
              >
                <div className="Card-Row">
                  <div className="Card-Col">
                    <span className="Card-Title">{history.Key}</span>
                  </div>
                  <div className="Card-Col">
                    <span className="Card-Title">V: </span>
                    {getFormattedNumber(history.Volume)}
                  </div>
                </div>
                <div className="Card-Row">
                  <div className="Card-Col">
                    <span className="Card-Title">O: </span>
                    {getNumberByFixedDecimal(history.Open)}
                  </div>
                  <div className="Card-Col">
                    <span className="Card-Title">C: </span>
                    {getFormattedNumber(history.Close)}
                  </div>
                </div>
                <div className="Card-Row">
                  <div className="Card-Col">
                    <span className="Card-Title">H:</span>
                    {getFormattedNumber(history.High)}
                  </div>
                  <div className="Card-Col">
                    <span className="Card-Title">L: </span>
                    {getFormattedNumber(history.Low)}
                  </div>
                  <div className="Card-Col">
                    <span className="Card-Title">Adj C: </span>
                    {getFormattedNumber(history.AdjClose)}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <Paginator
            first={lazyParams.first}
            rows={rowCount}
            totalRecords={totalRecords}
            onPageChange={onPage}
            rowsPerPageOptions={rowsPerPageOptions}
          ></Paginator>
        </React.Fragment>
      ) : (
        <NoData condition={!tableView && key} text={key} />
      )}
    </div>
  );
};
