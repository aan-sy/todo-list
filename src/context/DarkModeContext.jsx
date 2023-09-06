import { createContext, useContext, useState } from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(darkMode => !darkMode);
    updateMode(!darkMode)
  }

  return <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
    {children}
  </DarkModeContext.Provider>
}

export const useDarkMode = () => useContext(DarkModeContext);

const updateMode = (darkMode) => {
  if (darkMode) {
    document.documentElement.classList.add('darkMode');
  } else {
    document.documentElement.classList.remove('darkMode');
  }
}