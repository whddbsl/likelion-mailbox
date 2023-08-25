import Header from '@/layout/header';
import { useState } from 'react';
import { useEffect } from 'react';

function SelectStamp() {
  const [giphy, setGiphy] = useState(null);

  useEffect(() => {
    const key = import.meta.env.VITE_GIPHY_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${key}&limit=1&q=`;

    const getGiphyData = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setGiphy(data);
      console.log(giphy);
    };
    getGiphyData();
    console.log(giphy);
  }, []);

  return (
    <>
      <Header />
      <div></div>
    </>
  );
}

export default SelectStamp;
