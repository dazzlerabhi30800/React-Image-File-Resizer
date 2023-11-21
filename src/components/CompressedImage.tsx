import { useFileContext } from "../../store/Context"
import { MdOutlineFileDownload } from "react-icons/md";

export default function CompressedImage() {
    const { compressedFile, file, loading } = useFileContext();
    if (loading) return false;
    return (
        <div className="result--container">
            <img className="compressed-img" src={compressedFile} alt={file?.name} />
            <a href={compressedFile} download={file?.name} className="download--btn">Download your compressed & resize image <MdOutlineFileDownload /></a>
        </div>
    )
}

