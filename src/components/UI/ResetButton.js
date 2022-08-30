const ResetButton = (props) => {
  
  return (
    <button className={props.className} onClick={props.handler}>
      ❌ {props.text}
    </button>
  );
};

export default ResetButton;
