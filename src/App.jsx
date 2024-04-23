import "./App.css";
import { useState } from "react";

function App() {
  //Panel One Logic
  const [numOne, updateNumOne] = useState(0);

  const handleOneClick = (event) => {
    if (event.target.localName !== "button") {
      return;
    }
    if (event.target.innerText == "Clear") {
      updateNumOne(0)
      return
    }
    updateNumOne(event.target.innerText);
  };

  //Operator Panel Logic
  const [operator, updateOperator] = useState("+");

  const handleOperatorClick = (event) => {
    if (event.target.localName !== "button") {
      return;
    }
    updateOperator(event.target.innerText);
  };

  //Panel Two Logic
  const [numTwo, updateNumTwo] = useState(0);

  const handleTwoClick = (event) => {
    if (event.target.localName !== "button") {
      return;
    }
    if (event.target.innerText == "Clear") {
      updateNumTwo(0)
      return
    }
    updateNumTwo(Number(event.target.innerText));
  };

  //Return Answer Logic
  const [answer, updateAnswer] = useState(0);

  const returnAnswer = () => {
    switch (operator) {
      case "÷":
        updateAnswer(numOne / numTwo);
        break;
      case "+":
        updateAnswer(Number(numOne) + Number(numTwo));
        break;
      case "*":
        updateAnswer(numOne * numTwo);
        break;
      case "-":
        updateAnswer(numOne - numTwo);
        break;
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{numOne}</p>
        <div className="numbers" onClick={handleOneClick}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers" onClick={handleOperatorClick}>
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numTwo}</p>
        <div className="numbers" onClick={handleTwoClick}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={returnAnswer}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
