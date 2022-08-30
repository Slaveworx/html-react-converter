import { useState } from "react";

// COMPONENTS
import Footer from "./components/UI/Footer";
import ResetButton from "./components/UI/ResetButton";
import ErrorMessage from "./components/UI/ErrorMessage";
import CodeInput from "./components/CodeInput";
import CodeOutput from "./components/CodeOutput";
import Header from "./components/UI/Header";

//CSS
import "./css/custom.css";

function App() {
  const [outputCode, setOutputCode] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [enteredCode, setEnteredCode] = useState("");

  const enteredCodeHandler = (event) => {
    setEnteredCode(event.target.value);
  };

  const resetButtonHandler = () => {
    setErrorMessage(false);
    setEnteredCode("");
    setOutputCode("");
  };

  return (
    <div className="container">
      <Header />

      <ResetButton
        text="Clear"
        className="clear-button"
        handler={resetButtonHandler}
      />

      {errorMessage && <ErrorMessage />}

      <CodeInput value={enteredCode} onChange={enteredCodeHandler} />

      <CodeOutput
        enteredCode={enteredCode}
        outputCode={outputCode}
        setOutputCode={setOutputCode}
        resetButton={resetButtonHandler}
        errorHandler={setErrorMessage}
      />

      <Footer />
    </div>
  );
}

export default App;
