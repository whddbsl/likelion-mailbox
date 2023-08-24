import BackButton from "@/components/BackButton";
import SpeechBubble from "@/components/MessageLion";

function SelectPage() {
  return (
    <div>
      <SpeechBubble role="write" color="red" />
      <SpeechBubble role="confirm" color="blue" />
      <a href="" className=" top-10 right-[60px]">
        <BackButton />
      </a>
    </div>
  );
}

export default SelectPage;
