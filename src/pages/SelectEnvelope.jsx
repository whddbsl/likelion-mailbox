import envelopeImage from './../images/lion-envelope-color-pink.png';
import backButton from './../images/lion-back.png';

function SelectEnvelope() {
  return (
    <>
      <div className="weatherWrapper relative w-[1280px] h-[832px] bg-primary px-[62px] py-[70px]">
        <div className="weatherTalk w-[1156px] h-[224px] bg-lionWhite rounded-[20px] px-[40px] py-[38px] font-extrabold text-[50px] text-center">
          <p className="weatherTalk__degree mb-[36px]">
            흠..오늘 기온은 <span className="text-lionOrange">29도</span> 네요!
          </p>
          <p className="weatherTalk__color">
            편지봉투는 <span className="text-lionOrange">분홍색</span> 으로
            골라보낼게요!
          </p>
          <div className="envelopeWrapper m-auto">
            <img className="m-auto" src={envelopeImage} alt="편지봉투" />
            <button className="yesButton absolute w-[150px] h-[150px] right-[565px] bottom-[179px] z-10 bg-lionYellow rounded-full border-8 font-extrabold text-[40px] text-center border-lionBlack">
              좋아!
            </button>
            <img
              className="absolute w-[88px] h-[88px] right-[56px] bottom-[56px]"
              src={backButton}
              alt="뒤로가기"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectEnvelope;
