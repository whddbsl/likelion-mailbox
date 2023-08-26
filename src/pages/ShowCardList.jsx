import Letter from "@/components/Letter";
import Header from "@/layout/Header";
import { Link } from "react-router-dom";

function ShowCardList() {
  return (
    <>
      <Header text="편지가 이만큼 도착했어요!" />
      <div className="flex flex-row justify-center my-4">
        <Link to="/">
          <Letter />
        </Link>
      </div>
    </>
  );
}

export default ShowCardList;
