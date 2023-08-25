import SearchBar from '@/components/SearchBar';
import SearchUsers from '@/components/SearchUsers';
import Header from '@/layout/Header';

function Selection() {
  return (
    <main className="w-[1280px] h-[832px]">
      {/* <Lion width={width} height={height} /> */}
      <Header />
      <SearchBar />
      <SearchUsers />
    </main>
  );
}

export default Selection;
