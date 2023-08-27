import GoToBackButton from "@/components/GoToBackButton";
import MessageLion from "@/components/MessageLion";
import SelectPageButton from "@/components/SelectPageButton";
import { Link } from "react-router-dom";

function SelectPage() {
  return (
    <>
      <div className="flex flex-col gap-[80px] justify-center items-center h-full mr-10">
        <div className="flex flex-col items-end">
          <MessageLion role="write" color="red" />
          <Link to="/selectLion">
            <SelectPageButton role="write" text="남겨볼래!" />
          </Link>
        </div>

        <div className="flex flex-col items-end">
          <MessageLion role="confirm" color="blue" />
          <Link to="/showcardlist">
            <SelectPageButton role="read" text="확인해볼래!" />
          </Link>
        </div>
      </div>

      <a href="" className="absolute top-10 right-[60px]">
        <GoToBackButton fillColor="#FFC63E" />
      </a>
    </>
  );
}

export default SelectPage;
