export const Searchbar = ({ onChange }) => {
  return (
    <header className="searchbar">
      <form className="form" onSubmit={evt => onChange(evt)}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="keyword"
        />
      </form>
    </header>
  );
};
