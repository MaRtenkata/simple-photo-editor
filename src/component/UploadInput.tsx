import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFileMetadata } from '../features/fileSlice';

import { RootState } from '../store/store';

function UploadInput() {
  const { file } = useSelector((state: RootState) => state.file);
  const dispatch = useDispatch();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const file = event.target.files[0];

    dispatch(
      setFileMetadata({
        file: file,
      })
    );
  };

  const handleUpload = () => {
    if (file !== null) {
      console.log('Uploading file:', file.name);
    } else {
      console.log('No file selected.');
    }
  };

  return (
    <div className='upload-input-container'>
      <h3>Upload Image Here</h3>
      <input type='file' onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadInput;
