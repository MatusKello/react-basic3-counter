import DecreaseButton from './components/DecreaseButton';
import { useState } from 'react';
import IncreaseButton from './components/IncreaseButton';
import ResetButton from './components/ResetButton';

const App = () => {
  const [value, setValue] = useState(0);

  const decreaseOne = () => {
    const newValue = value - 1;
    setValue(newValue);
  };
  //const decreaseOne = () => setValue(value - 1);
  //!
  /*   const increaseOne = () => {
    const newValue = value + 1;
    setValue(newValue); 
  };*/
  const increaseOne = () => setValue(value - 1);

  const resetAll = () => {
    setValue(0);
  };

  return (
    <div>
      <h1>Counter</h1>
      <h2>{value}</h2>
      <DecreaseButton decrease={decreaseOne} />
      <IncreaseButton increase={increaseOne} />
      <ResetButton reset={resetAll} />
    </div>
  );
};

export default App;
