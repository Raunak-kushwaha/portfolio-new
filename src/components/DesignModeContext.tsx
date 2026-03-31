"use client"

import * as React from "react"

interface DesignModeContextType {
  isDesignMode: boolean
  toggleDesignMode: () => void
}

const DesignModeContext = React.createContext<DesignModeContextType | undefined>(undefined)

export function DesignModeProvider({ children }: { children: React.ReactNode }) {
  const [isDesignMode, setIsDesignMode] = React.useState(false)

  const toggleDesignMode = () => {
    setIsDesignMode((prev) => !prev)
  }

  return (
    <DesignModeContext.Provider value={{ isDesignMode, toggleDesignMode }}>
      <div className={isDesignMode ? "design-mode flex-1 flex flex-col" : "flex-1 flex flex-col"}>
        {children}
      </div>
    </DesignModeContext.Provider>
  )
}

export function useDesignMode() {
  const context = React.useContext(DesignModeContext)
  if (context === undefined) {
    throw new Error("useDesignMode must be used within a DesignModeProvider")
  }
  return context
}
