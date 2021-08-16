import { useContext, useState } from "react";

import {
  AutoComplete,
  AutoCompleteChangeParams,
  AutoCompleteSelectParams,
} from "primereact/autocomplete";
import { Divider } from "primereact/divider";

import moment from "moment";

import { StockService } from "../../services/StockService";
import { getDate } from "../../utils/Util";
import { SearchContext } from "../../contexts/SearchContext";

import "./SearchBar.css";

const SearchBar = () => {
  const { loadLazyData } = useContext(SearchContext);

  const [selectedInstrument, setSelectedInstrument] = useState<any>(null);
  const [filteredInstruments, setFilteredInstruments] = useState<any>(null);

  const stockService = new StockService();

  const searchInstrument = (event: { query: string }) => {
    let _filteredInstruments;

    stockService.getInstruments(selectedInstrument).then((data) => {
      if (!event.query.trim().length) {
        _filteredInstruments = [...data];
      } else {
        _filteredInstruments = data.filter((instrument: any) => {
          return instrument.Key.toLowerCase().startsWith(
            event.query.toLowerCase()
          );
        });
      }

      setFilteredInstruments(_filteredInstruments);
    });
  };

  const onSelect = (e: AutoCompleteSelectParams) => {
    const today = getDate();
    const defaultStartDate = +moment(today).subtract(1, "months").format("x");
    const defaultEndDate = +moment(today).format("x");

    setSelectedInstrument(e.value);
    loadLazyData(e.value.Key, 1, 10, defaultStartDate, defaultEndDate);
  };

  const onChange = (e: AutoCompleteChangeParams) => {
    setSelectedInstrument(e.value);
  };

  const itemTemplate = (item: any) => {
    return (
      <div className="country-item">
        <table>
          <tbody>
            <tr>
              <td width="150px">{item.Key}</td>
              <td>{item.Description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="Search-Bar">
      <div className="Search-Bar-Group">
        <div className="Search-Bar-Label">Search:</div>
        <div className="Search-Bar-Input">
          <AutoComplete
            // size={50}
            value={selectedInstrument}
            suggestions={filteredInstruments}
            completeMethod={searchInstrument}
            field="Key"
            itemTemplate={itemTemplate}
            onSelect={onSelect}
            onChange={onChange}
          />
        </div>
      </div>
      {/* <Divider /> */}
    </div>
  );
};

export default SearchBar;
