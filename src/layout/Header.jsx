import Lion from "@/components/Lion";
import Arrow from "@/components/Arrow";

function Header({ text }) {
  return (
    <header
      className=" bg-lionGray h-[100px] flex items-center
    justify-between w-screen"
    >
      <div className="flex items-center">
        <div className="my-3.5 ml-10 mr-4">
          <Lion width={85} height={85} color="blue" />
        </div>
        <div className=" flex w-[870px] h-[50px] text-[40px] font-bold items-end">
          <h1 className="mr-4 ">{text}</h1>
        </div>
      </div>
      <div className=" mr-10">
        <Arrow color="blue" />
      </div>
    </header>
  );
}

export default Header;
