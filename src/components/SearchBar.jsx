import debounce from "@/utils/debounce";
import { useState } from "react";
import { useId } from "react";
import SearchButton from "./SearchButton";

function SearchBar() {

  const searchId = useId();
  const [searchInput, setUserInput] = useState();
  
  //# 검색창
  const handleChangeInput = debounce((e) => {
    setUserInput(e.target.value.toLowerCase())
  }, 300);

  return (
    <>
      <form className=" flex items-center justify-center py-10">
        <label htmlFor={searchId} className="sr-only">검색</label>
        <input 
          type="text"
          name="search"
          id={searchId}
          defaultValue={searchInput}
          onChange={handleChangeInput}
          className="w-[993px] h-[57px] rounded-[10px] border-2 border-solid border-lionBlack bg-lionWhite mr-2 outline-lionYellow"
        />
      <SearchButton searchInput={searchInput}/>
      </form>
    </>
  )
}

export default SearchBar