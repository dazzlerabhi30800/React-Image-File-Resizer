import './App.css';
import ImageSubmitForm from './components/ImageSubmitForm';
import DimensionForm from './components/DimensionForm';
import { useFileContext } from '../store/Context';
import CompressedImage from './components/CompressedImage';
import Spinner from './components/Spinner';


function App() {
  const { file, compressedFile, loading } = useFileContext();
  return (
    <>
      <main>
        <h1>Image File Resizer</h1>
        <ImageSubmitForm />
        {file &&
          <DimensionForm />
        }
        {loading &&
          <Spinner />
        }
        {compressedFile.length > 0 &&
          <CompressedImage />
        }
      </main>
    </>
  )
}

export default App
