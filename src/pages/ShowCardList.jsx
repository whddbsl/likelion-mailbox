import LetterList from "@/components/LetterList";
import Header from "@/layout/Header";
import { Link } from "react-router-dom";

function ShowCardList() {
  return (
    <>
      <Header
        text="편지가 이만큼 도착했어요!"
        lionColor="blue"
        fillColor={"#0D77D8"}
      />
      <div className="flex flex-row justify-center my-4">
        <Link to="/viewcard">
          <LetterList />
        </Link>
      </div>
    </>
  );
}

export default ShowCardList;
