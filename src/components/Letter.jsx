// import useMessageList from "@/hooks/useMessageList";
import Envelope from "./Envelope";
import useMessageList from "@/hooks/useMessageList";

function Letter() {
  const { data } = useMessageList();
  if (data) {
    return (
      <>
        <ul className="flex flex-wrap gap-6 max-w-[1280px] justify-between px-2">
          {data.items.map((item) => (
            <li key={item.id}>
              <a href="/" className="flex flex-col">
                <Envelope />
                <span className="flex justify-end self-center items-center bg-lionYellow w-[250px] h-[34px] rounded-[10px] text-[20px] font-bold pr-6">
                  From. {item.fromId}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <a href="" className="flex flex-col">
          {/* <Envelope />
          <span className="flex justify-end self-center items-center bg-lionYellow w-[250px] h-[34px] rounded-[10px] text-[20px] font-bold pr-4">
            From. {data.items[0].fromId}
          </span> */}
        </a>
      </>
    );
  }
}

export default Letter;
