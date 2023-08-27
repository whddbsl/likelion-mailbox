import { useEffect, useState } from "react";
import red from "./../images/lion-envelope-color-red.png";
import carrot from "./../images/lion-envelope-color-carrot.png";
import pink from "./../images/lion-envelope-color-pink.png";
import orange from "./../images/lion-envelope-color-orange.png";
import yellow from "./../images/lion-envelope-color-yellow.png";
import skyblue from "./../images/lion-envelope-color-skyblue.png";
import blue from "./../images/lion-envelope-color-blue.png";
import white from "./../images/lion-envelope-color-white.png";

function Envelope({ color }) {
  const [envelopeColor, setEnvelopeColor] = useState(color);

  useEffect(() => {
    setEnvelopeColor(color);
  }, [color]);

  let envelopeImage;
  switch (envelopeColor) {
    case "red":
      envelopeImage = red;
      break;
    case "carrot":
      envelopeImage = carrot;
      break;
    case "pink":
      envelopeImage = pink;
      break;
    case "orange":
      envelopeImage = orange;
      break;
    case "yellow":
      envelopeImage = yellow;
      break;
    case "skyblue":
      envelopeImage = skyblue;
      break;
    case "blue":
      envelopeImage = blue;
      break;
    default:
      // 기본 이미지 설정
      envelopeImage = white;
      break;
  }

  return (
    <>
      <img src={envelopeImage} alt="편지" className="w-[296px] h-[207px]" />
    </>
  );
}

export default Envelope;
