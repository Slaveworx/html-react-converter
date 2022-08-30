import { Fragment } from "react";

//COMPONENTS
import ClipboardCopy from "./UI/ClipboardCopy";
import ResetButton from "./UI/ResetButton";

// MODULES
import SyntaxHighlighter from "react-syntax-highlighter";
import { colorBrewer } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeOutput = (props) => {

  const convertHandler = () => {
    if (props.enteredCode === "") {
      props.errorHandler(true);
    } else {
      props.errorHandler(false);
      props.setOutputCode(
        props.enteredCode
          .replace(/class/gi, "className") //class=
          .replace(/for=/gi, "forHtml=") //for=
          .replace(/(style=["])((?:...)*)(["])/g, "style={{$2}}")
          .replace(/(style=['])((?:...)*)(['])/g, "style={{$2}}")
          .replace(/<!--/g, "{* ") //comments opening
          .replace(/-->/g, " *}") //comments closing
          .replace(/(<img[^>]*[^/])>/g, "$1 />") // end slash in <img>
          .replace(/background-color/g, "backgroundColor")
      );
    }
  };

  return (
    <Fragment>
      <button onClick={convertHandler}> ✨ CONVERT TO JSX</button>

      {props.outputCode.length > 0 && (
        <div style={{ width: "100%" }}>
          <div className="action-buttons">
            <ClipboardCopy copyText={props.outputCode} />
            <ResetButton
              text="Reset"
              className="reset-button"
              handler={props.resetButton}
            />
          </div>

          <div className="success-message">
            <div className="message-wrapper">
              <h3>Enjoy your converted code 😎</h3>
              <p className="text-center">
                Was this converter helpful? Show us some love and share this
                with your friends.
              </p>
            </div>
          </div>

          <SyntaxHighlighter
            language="html"
            style={colorBrewer}
            wrapLongLines={true}
          >
            {props.outputCode}
          </SyntaxHighlighter>
        </div>
      )}
    </Fragment>
  );
};

export default CodeOutput;
