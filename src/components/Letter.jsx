import { Link } from "react-router-dom";
import Envelope from "./Envelope";
import useMessageList from "@/hooks/useMessageList";

function Letter() {
  const { data } = useMessageList();
  // console.log(data.items[0].envelope);
  if (data) {
    return (
      <ul className="flex flex-wrap gap-4 max-w-[1280px] justify-between px-4">
        {data.items.map((item) => (
          <li key={item.id}>
            <Link to="/" className="flex flex-col justify-center items-center">
              <Envelope color={item.envelope} />
              <span className="flex justify-end self-center items-center bg-lionYellow w-[250px] h-[34px] rounded-[10px] text-[20px] font-bold pr-6">
                From. {item.fromId}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default Letter;
