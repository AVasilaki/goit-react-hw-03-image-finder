import '../styles.css';
export const Searchbar = ({ onChange }) => {
  return (
    <header className="Searchbar">
      <form className="SearchForm " onSubmit={evt => onChange(evt)}>
        <button type="submit" className="SearchForm-button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
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
