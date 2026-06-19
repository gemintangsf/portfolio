"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Theme = "dark" | "light";

interface UIContextType {
    isModalOpen: boolean;
    setModalOpen: (open: boolean) => void;
    isLoaded: boolean;
    setLoaded: (loaded: boolean) => void;
    theme: Theme;
    toggleTheme: () => void;
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    prefilledMessage: string;
    setPrefilledMessage: (message: string) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isLoaded, setLoaded] = useState(false);
    const [theme, setTheme] = useState<Theme>("dark");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [prefilledMessage, setPrefilledMessage] = useState("");

    // Initialize theme and trigger load transition instantly
    useEffect(() => {
        setLoaded(true);
        const storedTheme = localStorage.getItem("portfolio-theme") as Theme | null;
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.setAttribute("data-theme", storedTheme);
        } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            setTheme("light");
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("portfolio-theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <UIContext.Provider value={{ 
            isModalOpen, 
            setModalOpen, 
            isLoaded, 
            setLoaded, 
            theme, 
            toggleTheme,
            selectedCategory,
            setSelectedCategory,
            prefilledMessage,
            setPrefilledMessage
        }}>
            {children}
        </UIContext.Provider>
    );
}

export function useUI() {
    const context = useContext(UIContext);
    if (context === undefined) {
        throw new Error("useUI must be used within a UIProvider");
    }
    return context;
}
