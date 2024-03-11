"use client"


import { createContext, useState } from 'react';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {

  useEffect (()=>{
    AOS.init()
    AOS.refresh()
  }, [])

  const [mode, setMode] = useState('light');

  const toggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <div className={`theme ${mode}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
