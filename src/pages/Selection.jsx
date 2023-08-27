import SearchBar from "@/components/SearchBar";
import SelectUser from "@/components/SelectUser";
import Header from "@/layout/Header";

function Selection() {
  return (
    <main className="w-[1280px] h-[832px]">
      {/* <Lion width={width} height={height} /> */}
      <Header text={"어떤 사자에게 편지를 남겨볼까요?"} lionColor={"red"} />
      <SearchBar />
      <SelectUser />
    </main>
  );
}

export default Selection;
