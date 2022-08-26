import { useState } from "react";
import "./App.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { colorBrewer } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ClipboardCopy from "./components/ClipboardCopy";

function App() {
  const [enteredCode, setEnteredCode] = useState("");
  const [outputCode, setOutputCode] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [placeholder, setPlaceholder] = useState("Paste your code here 😀📋");

  const convertHandler = () => {
    if (enteredCode === "") {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
      setOutputCode(
        enteredCode
          .replace(/class/gi, "className")
          .replace(/for=/gi, "forHtml=")
          .replace(/<!--/g, "{* ")
          .replace(/-->/g, " *}")
          .replace(/(<img\s.*?)>/g, "$1 />")
      );
    }
  };

  const enteredCodeHandler = (event) => {
    setEnteredCode(event.target.value);
  };

  const changePlaceholderHandler = (event) => {
    if (event.type === "blur") {
      setPlaceholder("Paste your code here 😀📋");
    } else {
      setPlaceholder("Ctrl + V  🔸  ⌘ + V");
    }
  };

  const resetButtonHandler = () => {
    setEnteredCode("");
    setOutputCode("");
  };

  return (
    <div className="App">
      <div className="container">
        <h2>HTML TO JSX CONVERTER</h2>

        <textarea
          placeholder={placeholder}
          value={enteredCode}
          onChange={enteredCodeHandler}
          onFocus={changePlaceholderHandler}
          onBlur={changePlaceholderHandler}
        ></textarea>

        <button onClick={convertHandler}> ✨ CONVERT TO JSX</button>

        {errorMessage && (
          <div className="error-message">
            <p>
              Calm down your horses!! 🙈 You need to paste some code before
              hitting Convert!
            </p>
          </div>
        )}

        {outputCode.length > 0 && (
          <div style={{ width: "100%" }}>
            <div className="success-message">
              <p>Enjoy your converted code 😎</p>
            </div>
            <div className="action-buttons">
              <ClipboardCopy copyText={outputCode} />
              <button className="reset-button" onClick={resetButtonHandler}>
                ❌ Reset
              </button>
            </div>
            <SyntaxHighlighter
              language="html"
              style={colorBrewer}
              wrapLongLines={true}
            >
              {outputCode}
            </SyntaxHighlighter>
          </div>
        )}
        <footer>
          <p>
            ©️ 2022 - <a href="https://deviago.me">DEVIAGO LOGO</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
