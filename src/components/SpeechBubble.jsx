import styles from "@/style/SelectPage.module.css";
import BlueLion from "./BlueLion";
import Lion from "@/components/Lion";
import SelectPageButton from "./SelectPageButton";

function SpeechBubble({ role, color }) {
  let lionText = "";

  if (role === "write") {
    lionText = "멋쟁이사자가 된 동기들에게 \n 메세지를 남겨볼까?";
  } else {
    lionText = "멋쟁이 동기들이 나에게 남긴 \n 메세지를 확인해볼까?";
  }

  return (
    <div className={styles.container}>
      <div className={styles.lion}>
        <div>{color === "red" ? <Lion /> : <BlueLion />}</div>
        <div className={styles.speechBubble}>
          <p className={styles.writeMessage}>{lionText}</p>
        </div>
      </div>
      <SelectPageButton />
    </div>
  );
}

export default SpeechBubble;
