import useFetchData from "@/hooks/useFetchData";
import UserList from "@/components/UserList";

const PB_PRODUCTS_ENDPOINT = `
  ${import.meta.env.VITE_PB_URL}/api/collections/users/records
`;

function SearchUsers() {
  const { data } = useFetchData(PB_PRODUCTS_ENDPOINT);
  console.log(data);
  // const { data, isLoading, error } = useFetchData(PB_PRODUCTS_ENDPOINT);

  // 로딩 중인 경우 화면
  // if (isLoading) {
  //   return <Spinner size={160} title="데이터 가져오는 중이에요." />;
  // }

  // 오류가 발생한 경우 화면
  // if (error) {
  //   return (
  //     <div role="alert">
  //       <h2>{error.type}</h2>
  //       <p>{error.message}</p>
  //     </div>
  //   );
  // }

  // const listId = useId();

  const handleSelectUser = () => {
    console.log('선택');
  }


  const userList = Array(9)
  .fill(1)
  .map((n, i) => 100 * (i + 1));
  console.log(userList);

  return (
    <ul className="grid grid-cols-3 m-10 gap-y-5 justify-items-center items-center">
      {/* {data.items?.map((item) => (
        <UserList key={item.id} item={item} />
      ))} */}

      {userList.map((key, i) => {
        return <li key={key} className="w-[300px] h-[64px] rounded-[10px] border-2 border-solid border-lionYellowInput bg-lionYellowInput flex justify-center items-center font-extrabold hover:bg-lionYellow hover:cursor-pointer" onClick={handleSelectUser}>{userList[i]}</li>
        }
      )}
    </ul>
  );
}

export default SearchUsers
