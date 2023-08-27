import Envelope from "./Envelope";
import useMessageList from "@/hooks/useMessageList";

function Letter() {
  const { data } = useMessageList();
  if (data) {
    return (
      <ul className="flex flex-wrap gap-4 max-w-[1280px] justify-between px-4">
        {data.items.map((item) => (
          <li key={item.id}>
            <div href="/" className="flex flex-col justify-center items-center">
              <Envelope />
              <span className="flex justify-end self-center items-center bg-lionYellow w-[250px] h-[34px] rounded-[10px] text-[20px] font-bold pr-6">
                From. {item.fromId}
              </span>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Letter;
