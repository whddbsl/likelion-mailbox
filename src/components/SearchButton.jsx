
function SearchButton(input) {


const handleSearch = () => {
  console.log(input);
}


  
  return (
  <div 
    role="button" 
    tabIndex={0}
    aria-labelledby="search"
    onClick={handleSearch}
    className="outline-none">
    <img src="/search.svg" alt="검색" id="search"/>
  </div>
  )
}

export default SearchButton