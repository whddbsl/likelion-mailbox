import Letter from "@/components/Letter";
import Header from "@/layout/Header";

function ShowCardList() {
  return (
    <>
      <Header text="편지가 이만큼 도착했어요!" />
      <div className="flex flex-row gap-8 justify-center items-center my-10 mx-10 bg-red-300">
        <Letter />
      </div>
    </>
  );
}

export default ShowCardList;
