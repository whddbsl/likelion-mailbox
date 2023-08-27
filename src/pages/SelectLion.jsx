import SearchBar from "@/components/SearchBar";
import SelectUser from "@/components/SelectUser";
import Header from "@/layout/Header";

function SelectLion() {
  return (
    <main className="w-[1280px] h-[832px]">
      <Header text={"어떤 사자에게 편지를 남겨볼까요?"} lionColor={"red"} />
      <SearchBar />
      <SelectUser />
    </main>
  );
}

export default SelectLion;
