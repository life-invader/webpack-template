import { ReactComponentExampleContainer } from "./ReactComponentExampleContainer.jsx";
import { useState } from "react";

export const ReactComponentExample = ({ btnText = "" }) => {
  const [number, setNumber] = useState(0);

  const buttonClickHandler = () => {
    setNumber(number + 1);
  };

  return (
    <div className="reactComponent">
      <div>ReactComponentExample</div>
      <p>{number}</p>
      <button onClick={buttonClickHandler}>-1</button>
      <button onClick={buttonClickHandler}>+1</button>
    </div>
  );
};

ReactComponentExample.Container = ReactComponentExampleContainer;
