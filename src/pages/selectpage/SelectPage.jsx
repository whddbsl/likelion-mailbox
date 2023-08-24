import BackButton from "@/components/BackButton";
import SpeechBubble from "@/components/SpeechBubble";
import styles from "@/style/SelectPage.module.css";

function SelectPage() {
  return (
    <div>
      <SpeechBubble role="write" color="red" />
      <SpeechBubble role="confirm" color="blue" />
      <a href="" className={styles.backButton}>
        <BackButton />
      </a>
    </div>
  );
}

export default SelectPage;
