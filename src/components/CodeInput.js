import { useState } from "react";

const CodeInput = (props) => {
  const [placeholder, setPlaceholder] = useState("Paste your code here 😀📋");

  const changePlaceholderHandler = (event) => {
    if (event.type === "blur") {
      setPlaceholder("Paste your code here 😀📋");
    } else {
      setPlaceholder("Ctrl + V  🔸  ⌘ + V");
    }
  };

  return (
    <textarea
      placeholder={placeholder}
      value={props.value}
      onChange={props.onChange}
      onFocus={changePlaceholderHandler}
      onBlur={changePlaceholderHandler}
    />
  );
};

export default CodeInput;
