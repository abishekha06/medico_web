import React, { createContext, useContext, useState } from 'react'
export const Csvcontextprovider = createContext();


export default function Csvcontext({ children }) {
    const [file, setUploadFiles] = useState(null);
    const [csvData, setCsvData] = useState('helllooo')
    
    const value = {
        csvData, setCsvData,
        file, setUploadFiles
    }
    return (
        <>
            <Csvcontextprovider.Provider value={value}>
                {children}
            </Csvcontextprovider.Provider>
        </>
    )
}






