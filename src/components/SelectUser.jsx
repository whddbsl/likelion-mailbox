import GoToEnvelope from "./GoToEnvelope";
import { useUserList } from "@/hooks/useUserList";

function SelectUser() {
  const { data } = useUserList();

  return (
    <ul className="grid grid-cols-3 m-10 gap-y-5 justify-items-center items-center text-3xl">
      {data &&
        data?.map((item) => {
          const keyId = item.id;
          const name = item.name;
          return (
            <li
              key={keyId}
              className="w-[300px] h-[64px] rounded-[10px] bg-inputYellow hover:bg-lionYellow hover:cursor-pointer"
            >
              <GoToEnvelope name={name} keyId={keyId} />
            </li>
          );
        })}
    </ul>
  );
}

export default SelectUser;
