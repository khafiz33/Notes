// import functions
import React from 'react';

const Context = React.createContext();

function Provider({children}) {
  const [theme, setTheme] = React.useState(false);
  return <Context.Provider value={{theme, setTheme}}>{children}</Context.Provider>
}
export {Context, Provider}
