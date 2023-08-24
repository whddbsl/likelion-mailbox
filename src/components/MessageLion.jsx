import BlueLion from "./BlueLion";
import Lion from "@/components/Lion";

function MessageLion({ role, color }) {
  let lionText = "";

  if (role === "write") {
    lionText = "멋쟁이사자가 된 동기들에게 \n 메세지를 남겨볼까?";
  } else {
    lionText = `멋쟁이 동기들이 나에게 남긴 \n 메세지를 확인해볼까?`;
  }

  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-row items-center gap-6">
        <div>{color === "red" ? <Lion /> : <BlueLion />}</div>

        <div className="w-[678px] h-[170px] flex justify-center bg-[url('/speech_bubble.svg')] whitespace-pre-line">
          <p className="text-[40px] leading-normal self-center">{lionText}</p>
        </div>
      </div>
    </div>
  );
}

export default MessageLion;
