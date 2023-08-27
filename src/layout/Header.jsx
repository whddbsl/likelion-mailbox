import Lion from "@/components/Lion";
// import Arrow from '@/components/Arrow';
import GoToBackButton from "@/components/GoToBackButton";

function Header({ text, fillColor, lionColor, featText }) {
  return (
    <header
      className=" bg-lionGray h-[100px] flex items-center
    justify-around w-[1280px] mx-auto"
    >
      <div className="flex items-center">
        <div className="my-3.5 ml-10 mr-4">
          <Lion width={80} height={80} lionColor={lionColor} />
        </div>
        <div className=" flex w-[870px] h-[50px] text-[40px] font-bold items-end">
          <h1 className="mr-4 text-bold text-4xl">{text}</h1>
          <span className="text-xl flex items-center">{featText}</span>
        </div>
      </div>
      <div className="mr-14">
        <GoToBackButton fillColor={fillColor} />
      </div>
    </header>
  );
}

export default Header;
