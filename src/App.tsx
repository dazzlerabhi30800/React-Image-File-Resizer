import './App.css';
import ImageSubmitForm from './components/ImageSubmitForm';
import DimensionForm from './components/DimensionForm';
import { useFileContext } from '../store/Context';
import CompressedImage from './components/CompressedImage';


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
        {compressedFile.length > 0 &&
          <CompressedImage />
        }
      </main>
    </>
  )
}

export default App
