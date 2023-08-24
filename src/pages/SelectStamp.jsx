import Header from '@/layout/header';
import { useEffect } from 'react';

function SelectStamp() {
  // console.log(Lion());
  useEffect(() => {
    const key = import.meta.env.VITE_GIPHY_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${key}`;
    console.log(url);
  }, []);
  return (
    <>
      <Header />
    </>
  );
}

export default SelectStamp;
