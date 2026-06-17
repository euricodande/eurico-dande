"use client"
import React, {createContext, useContext, useState, useEffect, ReactNode} from 'react';

type ThemeContextType = {
    isDarkMode: boolean;
    setIsDarkMode: (isDarkMode: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Load saved theme once
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark" ||
            (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark").matches)) {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    // Save theme whenever it changes
    useEffect(() => {
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
        document.documentElement.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }

    return context;
}