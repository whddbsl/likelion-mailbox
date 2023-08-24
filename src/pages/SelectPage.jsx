import Arrow from "@/components/Arrow";
import MessageLion from "@/components/MessageLion";
import SelectPageButton from "@/components/SelectPageButton";

function SelectPage() {
  return (
    <>
      <div className="flex flex-col gap-[80px] justify-center items-center h-full mr-10">
        <div className="flex flex-col">
          <MessageLion role="write" color="red" />
          <SelectPageButton role="write" text="남겨볼래!" />
        </div>

        <div className="flex flex-col">
          <MessageLion role="confirm" color="blue" />
          <SelectPageButton role="read" text="확인해볼래!" />
        </div>
      </div>

      <a href="" className="absolute top-10 right-[60px]">
        <Arrow />
      </a>
    </>
  );
}

export default SelectPage;
