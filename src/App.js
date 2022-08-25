import { useState } from "react";
import './App.css';

function App() {
  const [enteredCode, setEnteredCode] = useState("");
  const [outputCode, setOutputCode] = useState("");

  const convertHandler = () => {
    setOutputCode(
      enteredCode
        .replace(/class/gi, "className")
        .replace(/for=/gi, "forHtml=")
        .replace(/<!--/g, "{* ")
        .replace(/-->/g, " *}")
        .replace(/(<img\s.*?)>/g, '$1 />')
    );
  };

  const enteredCodeHandler = (event) => {
    setEnteredCode(event.target.value);
  };

  const placeholder = "Insert your code here...";

  return (
    <div className="App">
      <h2>HTML TO JSX CONVERTER</h2>
      <div className="enteredCode">
        <textarea
          rows="10"
          cols="50"
          defaultValue={placeholder}
          onChange={enteredCodeHandler}
        ></textarea>
      </div>
      <div className="convertButton">
        <button onClick={convertHandler}> « Convert »</button>
      </div>
      <div className="convertedCode">
        <textarea rows="10" cols="50" value={outputCode}></textarea>
      </div>
    </div>
  );
}

export default App;
