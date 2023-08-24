function SelectPageButton({ role }) {
  return (
    <>
      <button
        type="button"
        className={`w-[240px] h-[64px] text-[30px] font-bold self-end border-black border-4 rounded-[10px] ${
          role === "write" ? "bg-[#FFC63E]" : "bg-[#0D77D8]"
        }`}
      >
        남겨볼래!
      </button>
    </>
  );
}

export default SelectPageButton;
