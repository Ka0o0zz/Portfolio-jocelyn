import { useContext, createContext, useState, useMemo } from "react";

//Context
export const AppContext = createContext(null);

//Provider
export const AppContextProvider = ({ children }) => {
  const [animation, setAnimation] = useState(false);

  //
  const values = useMemo(
    () => ({
      animation, // States que seran visibles en el contexto.
      setAnimation, // Funciones que son exportadas para manejo externo.
    }),
    [animation]
  ); // States que serán visibles en el contexto.

  // Interface donde será expuesto como proveedor y envolverá la App.

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

//
export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    console.error("Error deploying App Context!!!");
  }

  return context;
}

export default useAppContext;
