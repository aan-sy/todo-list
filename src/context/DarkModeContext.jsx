import { createContext, useContext, useEffect, useState } from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(darkMode => !darkMode);
    updateMode(!darkMode)
  }

  useEffect(() => {
    const isDark = 
      localStorage.theme === 'dark' || 
      (
        !('theme' in localStorage) &&
        window.matchMedia(`(prefers-color-scheme: dark)`).matches
      )
    setDarkMode(isDark);
    updateMode(isDark);
  }, [])

  return <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
    {children}
  </DarkModeContext.Provider>
}

export const useDarkMode = () => useContext(DarkModeContext);

const updateMode = (darkMode) => {
  if (darkMode) {
    document.documentElement.classList.add('darkMode');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('darkMode');
    localStorage.theme = 'light';
  }
}