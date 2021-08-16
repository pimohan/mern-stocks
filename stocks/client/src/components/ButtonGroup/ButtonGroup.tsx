import React, { useContext } from "react";

import { ToggleButton } from "primereact/togglebutton";

import { Filter } from "../Filter/Filter";

import { AppContext } from "../../contexts/AppContext";
import { SearchContext } from "../../contexts/SearchContext";

import "./ButtonGroup.css";

/**
 * To show Period Filter & Toggle View
 * @returns ButtonGroup
 */
export const ButtonGroup = () => {
  const { tableView, toggleView } = useContext(AppContext);
  const { key } = useContext(SearchContext);

  return (
    <React.Fragment>
      {key ? (
        <div className="Button-Group">
          <Filter />
          <ToggleButton
            checked={tableView}
            onChange={(e) => toggleView()}
            onLabel="Table"
            offLabel="Card"
            onIcon="pi pi-microsoft"
            offIcon="pi pi-table"
          />
        </div>
      ) : null}
    </React.Fragment>
  );
};
