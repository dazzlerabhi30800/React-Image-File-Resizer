import { useFileContext } from "../../store/Context"
import { MdOutlineFileDownload } from "react-icons/md";

export default function CompressedImage() {
    const { compressedFile } = useFileContext();
    if (!compressedFile) return false;
    return (
        <div className="result--container">
            <img src={compressedFile} alt="" />
            <a href={compressedFile} download className="download--btn">Download your compressed & resize image <MdOutlineFileDownload /></a>
        </div>
    )
}