import SearchBar from "@/components/SearchBar";
import Header from "@/layout/header";
import { useState } from "react";
import { useEffect } from "react";

function SelectStamp() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("cat");

  const handleSearch = (searchValue) => {
    setQuery(searchValue);
  };

  useEffect(() => {
    const KEY = import.meta.env.VITE_GIPHY_API_KEY;
    const URL = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${KEY}&limit=15`;

    fetch(URL)
      .then((res) => res.json())
      .then((response) => {
        if (response.data) {
          setData(response.data);
        } else {
          console.log("Invalid data structure in API response");
        }
      })
      .catch((error) => console.log(error));
  }, [query]);

  // 공부기록
  //   fetch(URL)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     if (data) {
  //       setData(data.data);
  //       console.log(data.data);
  //     }
  //   })
  //   .catch((error) => console.log(error));
  // }, []);

  return (
    <>
      <Header text={"움직이는 우표를 골라보세요!"} featText={"(feat.GIPHY)"} />
      <SearchBar
        searchText={"GIF이미지 검색이 가능합니다! ex) cat"}
        onSearch={handleSearch}
      />
      <div className="flex flex-wrap">
        {data &&
          data.map((item) => (
            <div key={item.id} className="m-2">
              <img
                src={item.images.original.url}
                alt="GIF"
                width="300"
                height="200"
              />
            </div>
          ))}
      </div>
    </>
  );
}

export default SelectStamp;
