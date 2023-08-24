function CircleButton({ type, circleButtonText, width, height }) {
  const circleButtonSize = {
    width: width || '189px',
    height: height || '189px',
  };

  return (
    <>
      <button
        className="bg-lionYellow border-8 border-black rounded-full cursor-pointer"
        type={type}
        style={circleButtonSize}
      >
        <span className="font-extrabold text-center text-[2.5rem]">
          {circleButtonText}
        </span>
      </button>
    </>
  );
}

export default CircleButton;
