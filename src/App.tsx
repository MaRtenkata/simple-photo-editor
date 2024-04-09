import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Slider from './component/Slider';
import UploadInput from './component/UploadInput';
import { RootState } from './store/store';
import { clearFileMetadata } from './features/fileSlice';

function App() {
  const { file } = useSelector((state: RootState) => state.file);

  const dispatch = useDispatch();

  return (
    <div className='container'>
      <div className='image-box'>
        {file !== null ? (
          <div>
            <img
              className='image'
              src={URL.createObjectURL(file)}
              alt={file.name}
            />
            <button onClick={() => dispatch(clearFileMetadata())}>
              Remove Image
            </button>
          </div>
        ) : (
          <UploadInput />
        )}
      </div>
      <div className='sidebar'>Sidebar</div>

      <Slider />
    </div>
  );
}

export default App;
