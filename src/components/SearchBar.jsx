import debounce from "@/utils/debounce";
import { useState } from "react";
import { useId } from "react";

function SearchBar({ searchText, onSearch }) {
  const searchId = useId();
  const [userInput, setUserInput] = useState(null);

  //# 검색창
  const handleChangeInput = debounce((e) => {
    setUserInput(e.target.value.toLowerCase());
    onSearch(e.target.value.toLowerCase());
  }, 300);

  return (
    <>
      <form className=" flex items-center justify-center py-10">
        <label htmlFor={searchId} className="sr-only">
          검색
        </label>
        <input
          type="text"
          name="search"
          id={searchId}
          defaultValue={userInput}
          placeholder={searchText}
          onChange={handleChangeInput}
          className="w-[993px] h-[57px] rounded-[10px] border-2 border-solid border-lionBlack bg-lionWhite mr-2 outline-lionYellow"
        />
        <div
          role="button"
          tabIndex={0}
          aria-labelledby="search"
          className="outline-none"
        >
          <img src="/search.svg" alt="검색" id="search" />
        </div>
      </form>
    </>
  );
}

export default SearchBar;
