
export default function DimensionForm() {
    return (
        <form className="dimension--form">
            <div className="input--container">
                <input type="number" placeholder="width" className="dimension--input" />
                <label>px</label>
            </div>
            <div className="input--container">
                <input type="number" placeholder="height" className="dimension--input" />
                <label>px</label>
            </div>
            <button className="submit--btn">Compress Your Image</button>
        </form>
    )
} 