import React, {createContext, useState} from "react"

export const GlobalContext = createContext()

export default function ContextProvider({children}) {
    const [atChapter, setAtChapter] = useState(0)
    const [atSubchapter, setAtSubchapter] = useState(0)
    
    return (
        <GlobalContext.Provider
            value={[atChapter, setAtChapter],[atSubchapter, setAtSubchapter]}
        >
            {children}
        </GlobalContext.Provider>
    )
}