import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";


type dimension = {
    width: number,
    height: number,
    format: string,
    quality: number,
}

type compressedFile = string;



interface FileContext {
    file: File | null,
    setFile: Dispatch<SetStateAction<File | null>>,
    compressedFile: compressedFile,
    setCompressedFile: Dispatch<SetStateAction<compressedFile>>,
    fileProps: dimension,
    setFileProps: Dispatch<SetStateAction<dimension>>,
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>,
}

export const fileContext = createContext<FileContext | null>(null);


export default function FileContextProvider({ children }: { children: ReactNode }) {
    const [file, setFile] = useState<File | null>(null);
    const [compressedFile, setCompressedFile] = useState<compressedFile>("");
    const [fileProps, setFileProps] = useState<dimension>({
        width: 0,
        height: 0,
        format: "PNG",
        quality: 80
    })
    const [loading, setLoading] = useState<boolean>(false);


    return (
        <fileContext.Provider value={{ file, setFile, compressedFile, setCompressedFile, fileProps, setFileProps, loading, setLoading }}>
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