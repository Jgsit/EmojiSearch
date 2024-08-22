function Search(props) {
  const { text, setText } = props;
  const handleInputChange = (event) => {
    setText(event.target.value);
  };
  return (
    <header>
      <h1>😎 EmojiSearch 😎</h1>
      <input
        type="text"
        placeholder="What emoji are you looking for ?"
        value={text}
        onChange={handleInputChange}
      />
    </header>
  );
}

export default Search;
