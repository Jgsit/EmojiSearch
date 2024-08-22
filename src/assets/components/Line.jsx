function Line(props) {
  const handleClick = (event) => {
    navigator.clipboard.writeText(props.emoji.symbol);
  };
  return (
    <div className="line" onClick={handleClick}>
      <p>
        {props.emoji.symbol} {props.emoji.title}
      </p>
      <span className="hidden">Click to copy !</span>
    </div>
  );
}

export default Line;
