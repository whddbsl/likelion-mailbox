import Letter from "@/components/Letter";
import Header from "@/layout/Header";

function ShowCardList() {
  return (
    <>
      <Header text="편지가 이만큼 도착했어요!" />
      <div className="flex flex-row justify-self-start justify-items-start ">
        <Letter />
      </div>
    </>
  );
}

export default ShowCardList;
