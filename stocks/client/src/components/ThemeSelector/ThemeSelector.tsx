import { useContext } from "react";
import { Dropdown } from "primereact/dropdown";

import { themeOptions } from "../../constants/ThemeConstants";

import { ThemeContext } from "../../contexts/ThemeContext";

/**
 * Perform switching themes (light, blue & dark)
 * @returns ThemeSelector Component
 */
export const ThemeSelector = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="Theme-Selector-Container">
      <label>Theme: </label>
      <Dropdown
        value={theme}
        options={themeOptions}
        onChange={(e) => setTheme(e.value)}
        optionLabel="name"
        placeholder="Select Theme"
      />
    </div>
  );
};
