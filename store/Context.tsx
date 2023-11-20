import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";


type dimension = {
    width: number | null,
    height: number | null,
}
interface FileContext {
    file: File | null,
    setFile: Dispatch<SetStateAction<File | null>>,
    compressedFile: File | null,
    setCompressedFile: Dispatch<SetStateAction<File | null>>,
    dimensions: dimension,
    setDimensions: Dispatch<SetStateAction<dimension>>,
}

export const fileContext = createContext<FileContext | null>(null);


export default function FileContextProvider({ children }: { children: ReactNode }) {
    const [file, setFile] = useState<File | null>(null);
    const [compressedFile, setCompressedFile] = useState<File | null>(null);
    const [dimensions, setDimensions] = useState<dimension>({
        width: null,
        height: null
    })


    return (
        <fileContext.Provider value={{ file, setFile, compressedFile, setCompressedFile, dimensions, setDimensions }}>
            {children}
        </fileContext.Provider>
    )
}


// consumer
export const useFileContext = () => {
    const fileConsumer = useContext(fileContext);
    if (!fileConsumer) {
        throw new Error("file context not used")
    }
    return fileConsumer;
}