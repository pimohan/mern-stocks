import Header from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { ButtonGroup } from "./components/ButtonGroup/ButtonGroup";
import { TableView } from "./components/TableView/TableView";
import { CardView } from "./components/CardView/CardView";
import { ChartView } from "./components/ChartView/ChartView";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";

import { AppContextProvider } from "./contexts/AppContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { SearchContextProvider } from "./contexts/SearchContext";
import { PagingProvider } from "./contexts/PagingContext";
import { FilterProvider } from "./contexts/FilterContext";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import "./App.css";

/**
 * Bootstrapping and composing of component hierarchy to launch the app
 * @returns App Component
 */
const App = () => {
  return (
    <div className="App">
      <ErrorBoundary>
        <ThemeContextProvider>
          <AppContextProvider>
            <SearchContextProvider>
              <Header title="Stock History" />
              <Main>
                <FilterProvider>
                  <ButtonGroup />
                  <PagingProvider>
                    <TableView />
                    <CardView />
                  </PagingProvider>
                  <ChartView />
                </FilterProvider>
              </Main>
            </SearchContextProvider>
          </AppContextProvider>
        </ThemeContextProvider>
      </ErrorBoundary>
    </div>
  );
};

export default App;
