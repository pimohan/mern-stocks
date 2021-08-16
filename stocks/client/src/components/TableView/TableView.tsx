import React, { useContext } from "react";

import { Card } from "primereact/card";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

import { AppContext } from "../../contexts/AppContext";
import { PagingContext } from "../../contexts/PagingContext";
import { SearchContext } from "../../contexts/SearchContext";

import { NoData } from "../NoData/NoData";

import {
  getFormattedDate,
  getFormattedNumber,
  getNumberByFixedDecimal,
} from "../../utils/Util";
import { rowsPerPageOptions } from "../../utils/TableUtil";

import "./TableView.css";

/**
 * Renders history data in table format (rows and columns)
 * @returns TableView Component
 */
export const TableView = () => {
  const { tableView } = useContext(AppContext);
  const { key, data, totalRecords } = useContext(SearchContext);
  const { rowCount, lazyParams, onPage } = useContext(PagingContext);

  const dateBodyTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <span className="p-column-title">Date</span>
        {getFormattedDate(rowData.Date)}
      </React.Fragment>
    );
  };

  const openBodyTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <span className="p-column-title">Open</span>
        {getNumberByFixedDecimal(rowData.Open)}
      </React.Fragment>
    );
  };
  const highBodyTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <span className="p-column-title">High</span>
        {getNumberByFixedDecimal(rowData.High)}
      </React.Fragment>
    );
  };
  const lowBodyTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <span className="p-column-title">Low</span>
        {getNumberByFixedDecimal(rowData.Low)}
      </React.Fragment>
    );
  };

  const closeBodyTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <span className="p-column-title">Close</span>
        {getNumberByFixedDecimal(rowData.Close)}
      </React.Fragment>
    );
  };

  const adjCloseBodyTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <span className="p-column-title">Adj Close</span>
        {getNumberByFixedDecimal(rowData.AdjClose)}
      </React.Fragment>
    );
  };

  const volumeBodyTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <span className="p-column-title">Volume</span>
        {getFormattedNumber(rowData.Volume)}
      </React.Fragment>
    );
  };

  return (
    <div className="Table-View datatable-responsive-demo">
      {tableView && data && data.length > 0 ? (
        <Card>
          <DataTable
            value={data}
            lazy
            paginator
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
            first={lazyParams.first}
            rows={rowCount}
            rowsPerPageOptions={rowsPerPageOptions}
            totalRecords={totalRecords}
            onPage={onPage}
            className="p-datatable-responsive-demo"
            stripedRows
          >
            <Column field="Date" header="Date" body={dateBodyTemplate} />
            <Column field="Open" header="Open" body={openBodyTemplate} />
            <Column field="High" header="High" body={highBodyTemplate} />
            <Column field="Low" header="Low" body={lowBodyTemplate} />
            <Column field="Close" header="Close" body={closeBodyTemplate} />
            <Column
              field="AdjClose"
              header="Adj Close"
              body={adjCloseBodyTemplate}
            />
            <Column field="Volume" header="Volume" body={volumeBodyTemplate} />
          </DataTable>
        </Card>
      ) : (
        <NoData condition={tableView && key} text={key} />
      )}
    </div>
  );
};
