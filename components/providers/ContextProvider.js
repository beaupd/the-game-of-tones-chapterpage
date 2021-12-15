import React, {createContext, useState} from "react"

export const GlobalContext = createContext()

export default function ContextProvider({children}) {
    const [atChapter, setAtChapter] = useState(1)
    const [atSubchapter, setAtSubchapter] = useState(1)
    
    return (
        <GlobalContext.Provider
            value={{chapter:[atChapter, setAtChapter], subChapter:[atSubchapter, setAtSubchapter]}}
        >
            {children}
        </GlobalContext.Provider>
    )
}