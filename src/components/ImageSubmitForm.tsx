import { FaRegFileImage } from "react-icons/fa";

interface submitData {
    file: File | null,
    setFile: React.Dispatch<React.SetStateAction<File | null>>
}

export default function ImageSubmitForm({ file, setFile }: submitData) {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
            return true;
        }
        return false;
    }
    return (
        <form onSubmit={handleSubmit} >
            <input onChange={handleUpload} type="file" id='file--input' />
            <label htmlFor="file--input">{file?.name ? file.name : "Upload your File"} <FaRegFileImage /></label>
            <small className="error">Error</small>
        </form>
    )
} 
