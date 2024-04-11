interface SliderProps {
  min: number;
  max: number;
  value: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Slider(props: SliderProps) {
  const { min, max, value, handleChange } = props;

  return (
    <div className='slider-container'>
      <input
        onChange={handleChange}
        className='slider'
        value={value}
        type='range'
        min={min}
        max={max}
      />
    </div>
  );
}
