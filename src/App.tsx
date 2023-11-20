import './App.css';
import { MdOutlineFileDownload } from "react-icons/md";
import ImageSubmitForm from './components/ImageSubmitForm';
import DimensionForm from './components/DimensionForm';
import { useFileContext } from '../store/Context';


function App() {
  const { file, compressedFile } = useFileContext();
  return (
    <>
      <main>
        <h1>Image File Resizer</h1>
        <ImageSubmitForm />
        {file &&
          <DimensionForm />
        }
        {compressedFile &&
          <button>Download your compressed & resize image <MdOutlineFileDownload /></button>
        }
      </main>
    </>
  )
}

export default App
