import BackButton from "@/components/BackButton";
import MessageLion from "@/components/MessageLion";
import SelectPageButton from "@/components/SelectPageButton";

function SelectPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <MessageLion role="write" color="red" />
        <SelectPageButton role="write" text="남겨볼래!" />
      </div>
      <div className="flex flex-col">
        <MessageLion role="confirm" color="blue" />
        <SelectPageButton role="read" text="확인해볼래!" />
      </div>
      <a href="" className="absolute top-10 right-[60px]">
        <BackButton />
      </a>
    </div>
  );
}

export default SelectPage;
