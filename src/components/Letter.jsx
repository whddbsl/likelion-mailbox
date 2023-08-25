import Envelope from "./Envelope";

function Letter({ text }) {
  return (
    <>
      <a href="" className="flex flex-col">
        <Envelope />
        <span className="flex justify-end self-center items-center bg-lionYellow w-[250px] h-[34px] rounded-[10px] text-[20px] font-bold pr-4">
          From. {text}
        </span>
      </a>
    </>
  );
}

export default Letter;
