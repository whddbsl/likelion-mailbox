function SearchButton(searchInput) {

  const handleSearch = () => {
    console.log("searchInput");
  }

  const handleKeyPress = () => {
      console.log("searchInput");
  }

  return (
  <div 
    role="button" 
    tabIndex={0}
    aria-labelledby="search"
    onClick={handleSearch}
    onKeyDown={handleKeyPress}
    >
    <img src="/search.svg" alt="검색" id="search"/>
  </div>
  )
}

export default SearchButton