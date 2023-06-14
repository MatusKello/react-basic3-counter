import './IncreaseButton.css';

const IncreaseButton = (props) => {
  return <button onClick={props.increase}>Increase by 1</button>;
};

export default IncreaseButton;
