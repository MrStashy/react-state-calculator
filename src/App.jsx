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
    if (event.target.innerText == "Recall") {
      updateNumOne(storedNum)
      return
    }
    if (event.target.innerText == ".") {
      if (numOne.includes('.')) {
        return
      } else {
        updateNumOne(numOne + event.target.innerText)
      }
    }
    if (Number(numOne) === 0) {
    updateNumOne(event.target.innerText);
    } else {
      updateNumOne(numOne + event.target.innerText);
    }
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
    if (event.target.innerText == "Recall") {
      updateNumTwo(storedNum)
      return
    }
    if (event.target.innerText == ".") {
      if (numTwo.includes('.')) {
        return
      } else {
        updateNumTwo(numTwo + event.target.innerText)
      }
    }
    if (Number(numTwo) === 0) {
      updateNumTwo(event.target.innerText);
      } else {
        updateNumTwo(numTwo + event.target.innerText);
      }
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

  //Store Answer Logic
  const [storedNum, updateStoredNum] = useState(0)

  const handleStoreClick = () => {
    updateStoredNum(answer)
  }

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
          <button onClick={updateNumOne}>Recall</button>
          <button>.</button>
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
          <button>Recall</button>
          <button>.</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={returnAnswer}>=</button>
          <button onClick={handleStoreClick}>Store</button>
        </div>
      </div>
    </div>
  );
}

export default App;
