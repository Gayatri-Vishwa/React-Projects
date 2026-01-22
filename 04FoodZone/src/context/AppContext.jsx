import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(null);

  return (
    <AppContext.Provider value={{ search, setSearch, filteredData, setFilteredData }}>
      {children}
    </AppContext.Provider>
  );
}
