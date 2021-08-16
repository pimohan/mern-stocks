import { ProgressSpinner } from "primereact/progressspinner";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

import SearchBar from "../SearchBar/SearchBar";
import { ThemeSelector } from "../ThemeSelector/ThemeSelector";

import "./Header.css";

export interface HeaderProps {
  title: string;
}

/**
 * Renders Header with title passed
 * @param props title
 * @returns Header Component
 */
const Header = (props: HeaderProps) => {
  const { loading } = useContext(AppContext);

  return (
    <header className="App-header">
      {loading && (
        <ProgressSpinner
          style={{
            width: "50px",
            height: "50px",
            zIndex: "100",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          strokeWidth="8"
          fill="#EEEEEE"
          animationDuration=".5s"
        />
      )}

      <div className="Header-Container">
        <h1>{props.title}</h1>
        <ThemeSelector />
      </div>
      <SearchBar />
    </header>
  );
};

export default Header;
