import { createContext, useState } from "react";

export const CursoContext = createContext();

export const CursoProvider = ({children}) => {
    const [curso, setCurso] = useState([])

    const addCurso = (item) => {
        setCurso([...curso, item])
    }

    return (
        <>
            <CursoContext.Provider value={{curso, addCurso}}>
                {children}
            </CursoContext.Provider>
        </>
    )
}
