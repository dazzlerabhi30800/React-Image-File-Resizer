import { useState } from 'react'
import './App.css';
import { MdOutlineFileDownload } from "react-icons/md";
import ImageSubmitForm from './components/ImageSubmitForm';
import DimensionForm from './components/DimensionForm';


function App() {
  const [file, setFile] = useState<File | null>(null);
  return (
    <>
      <main>
        <h1>Image File Resizer</h1>
        <ImageSubmitForm file={file} setFile={setFile} />
        <DimensionForm />
        <button>Download your compressed & resize image <MdOutlineFileDownload /></button>
      </main>
    </>
  )
}

export default App
