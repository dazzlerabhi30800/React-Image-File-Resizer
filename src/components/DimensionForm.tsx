import { useFileContext } from "../../store/Context";
import Resizer from 'react-image-file-resizer';

export default function DimensionForm() {
    const { fileProps, setFileProps, file, setCompressedFile, setLoading } = useFileContext();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (fileProps.height < 1 || fileProps.width < 1 || !file) {
            alert('Please input valid dimensions');
            return false;
        }
        setLoading(true);
        const resizedFile: (string | unknown) = await imageResizer(file);
        if (typeof resizedFile == "string") {
            setCompressedFile(resizedFile);
            setLoading(false);
            return true;
        }
        return false;

    }
    const imageResizer = (file: File) => {
        return new Promise((resolve) => {
            Resizer.imageFileResizer(
                file,
                fileProps?.width,
                fileProps?.height,
                fileProps.format,
                fileProps.quality,
                0,
                (uri) => {
                    setTimeout(() => {
                        resolve(uri);
                    }, 3000);
                },
                "base64",
            )
        })
    }
    return (
        <form onSubmit={handleSubmit} className="dimension--form">
            <div className="input--container">
                <input onChange={(e) => setFileProps({ ...fileProps, width: parseInt(e.target.value) })} type="number" placeholder="width" className="dimension--input" />
                <label>px</label>
            </div>
            <div className="input--container">
                <input onChange={(e) => setFileProps({ ...fileProps, height: parseInt(e.target.value) })} type="number" placeholder="height" className="dimension--input" />
                <label>px</label>
            </div>
            <select onChange={(e) => setFileProps({ ...fileProps, format: e.target.value })} name="file-format" id="image-format">
                <option value="PNG">png</option>
                <option value="JPEG">jpeg</option>
            </select>
            <select value={fileProps.quality} onChange={(e) => setFileProps({ ...fileProps, quality: parseInt(e.target.value) })} name="image-quality" id="image-quality">
                {Array(10).fill(0).map((_arr, index: number) => {
                    return (
                        <option key={index} value={(index + 1) * 10}>{(index + 1) * 10}%</option>
                    )
                })}
            </select>
            <button className="submit--btn">Compress Your Image</button>
        </form>
    )
} 