import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Slider from './component/Slider';
import UploadInput from './component/UploadInput';
import { RootState } from './store/store';
import { clearFileMetadata } from './features/fileSlice';
import React, { useState } from 'react';

const DEFAULT_OPTIONS = [
  {
    name: 'blur',
    value: 0,
    min: 0,
    max: 5,
    unit: 'px',
  },
  {
    name: 'brightness',
    value: 100,
    min: 0,
    max: 100,
    unit: '%',
  },
  {
    name: 'contrast',
    value: 100,
    min: 0,
    max: 200,
    unit: '%',
  },
  {
    name: 'grayscale',
    value: 0,
    min: 0,
    max: 100,
    unit: '%',
  },
  {
    name: 'hue-rotate',
    value: 0,
    min: 0,
    max: 360,
    unit: 'deg',
  },
  {
    name: 'invert',
    value: 0,
    min: 0,
    max: 100,
    unit: '%',
  },
  {
    name: 'opacity',
    value: 100,
    min: 0,
    max: 100,
    unit: '%',
  },
  {
    name: 'saturate',
    value: 100,
    min: 0,
    max: 200,
    unit: '%',
  },
  {
    name: 'sepia',
    value: 0,
    min: 0,
    max: 100,
    unit: '%',
  },
];

function App() {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

  const { file } = useSelector((state: RootState) => state.file);

  const [filterOptions, setFilterOptions] = useState(DEFAULT_OPTIONS);

  const dispatch = useDispatch();

  function getFilters() {
    const filterFunctions = filterOptions.map((option) => {
      return `${option.name}(${option.value}${option.unit})`;
    });

    return filterFunctions.join(' ');
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFilterOptions((prevOption) => {
      return prevOption.map((option, index) => {
        if (selectedOptionIndex !== index) return option;

        return { ...option, value: Number(e.target.value) };
      });
    });
  }

  return (
    <div className='container'>
      <div className='image-box'>
        {file !== null ? (
          <div>
            <img
              className={`image ${file && 'image-filtered'}`}
              src={file && URL.createObjectURL(file)}
              alt={file?.name || 'Uploaded Image'}
              style={{ '--filters': getFilters() } as React.CSSProperties}
            />
            <button onClick={() => dispatch(clearFileMetadata())}>
              Remove Image
            </button>
          </div>
        ) : (
          <UploadInput />
        )}
      </div>
      <div className='sidebar'>
        {filterOptions.map((option, index) => {
          return (
            <button
              onClick={() => setSelectedOptionIndex(index)}
              className={`sidebar-btn ${
                selectedOptionIndex === index ? 'active' : ' '
              }`}
            >
              {option.name.toUpperCase()}
            </button>
          );
        })}
      </div>

      <Slider
        min={filterOptions[selectedOptionIndex].min}
        max={filterOptions[selectedOptionIndex].max}
        value={filterOptions[selectedOptionIndex].value}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
