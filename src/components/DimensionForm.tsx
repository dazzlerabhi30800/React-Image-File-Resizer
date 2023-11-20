import { useFileContext } from "../../store/Context";
import Resizer from 'react-image-file-resizer';

export default function DimensionForm() {
    const { dimensions, file, setDimensions, compressedFile, setCompressedFile } = useFileContext();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (dimensions.height < 1 || dimensions.width < 1 || !file) {
            alert('Please input valid dimensions');
            return false;
        }
        const resizedFile: (string | unknown) = await imageResizer(file);
        if (typeof resizedFile == "string") {
            setCompressedFile(resizedFile);
        }

    }
    const imageResizer = (file: File) => {
        return new Promise((resolve) => {
            Resizer.imageFileResizer(
                file,
                dimensions?.width,
                dimensions?.height,
                "PNG",
                80,
                0,
                (uri) => {
                    resolve(uri);
                },
                "base64",
            )
        })
    }
    return (
        <form onSubmit={handleSubmit} className="dimension--form">
            <div className="input--container">
                <input onChange={(e) => setDimensions({ ...dimensions, width: parseInt(e.target.value) })} type="number" placeholder="width" className="dimension--input" />
                <label>px</label>
            </div>
            <div className="input--container">
                <input onChange={(e) => setDimensions({ ...dimensions, height: parseInt(e.target.value) })} type="number" placeholder="height" className="dimension--input" />
                <label>px</label>
            </div>
            <button className="submit--btn">Compress Your Image</button>
        </form>
    )
} 