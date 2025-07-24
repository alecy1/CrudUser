import { createContext, useState } from "react";
export const ThemeContext = createContext('light');


export const Estado = () =>{
  const [theme, setTheme] = useState('light');
  return theme;
}


