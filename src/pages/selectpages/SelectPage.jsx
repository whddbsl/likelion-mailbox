import BackButton from "@/components/BackButton";
import SpeechBubble from "@/components/SpeechBubble";

function SelectPage() {
  return (
    <div>
      <SpeechBubble role="write" color="red" />
      <SpeechBubble role="confirm" color="blue" />
      <a href="" className="absolute top-4 right-4">
        <BackButton />
      </a>
    </div>
  );
}

export default SelectPage;
