"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface UIContextType {
    isModalOpen: boolean;
    setModalOpen: (open: boolean) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <UIContext.Provider value={{ isModalOpen, setModalOpen }}>
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
