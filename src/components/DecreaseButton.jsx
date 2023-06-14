import './DecreaseButton.css';

const DecreaseButton = (props) => {
  return <button onClick={props.decrease}>Decrease by 1</button>;
};

export default DecreaseButton;
