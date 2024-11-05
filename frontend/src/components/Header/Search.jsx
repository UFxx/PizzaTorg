import searchIcon from '../../assets/images/search-button.png';

function Search() {
  function search(input) {
    const searchText = input.value;

    window.location.href = `/search?search=${searchText}`;
  }

  return (
    <>
      <div className="search">
        <input
          type="search"
          placeholder="Поиск товара"
          defaultValue={new URL(window.location).searchParams.get('search')}
          onKeyDown={(e) => (e.key === 'Enter' ? search(e.target) : null)}
        />
        <div
          className="search-button"
          onClick={(e) => search(e.currentTarget.previousElementSibling)}
        >
          <img src={searchIcon} alt="search button" />
        </div>
      </div>
    </>
  );
}

export default Search;
