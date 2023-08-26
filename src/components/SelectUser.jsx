import useFetchData from "@/hooks/useFetchData";
import UserList from "@/components/UserList";
import { pb } from "@/api/pocketbase";
import { Link } from "react-router-dom";
import { useEffect } from "react";



// const record = await pb.collection('users').getFullList();
// console.log(record)
// console.log('pb', pb);

// const endpoint = 'https://likelion-mailbox.pockethost.io/api/collections/users/records'
const endpoint = 'https://likelion-mailbox.pockethost.io/api/collections/test/records'


function SelectUser() {
  
  const {data} = useFetchData(endpoint);


  const userInform = data?.items.map((item) => (
    console.log(item.id)
  ))

  console.log(userInform);
  // const getUsers = () => {
  //   return  pb.collection('test').getFullList();
  // }
  // console.log(getUsers());

  // const {data} = useFetchData(pb.collection('users'));

  // console.log(data);


  // const listId = useId();

  // const handleSelectUser = () => {
  //   console.log('선택');
  // }


  const userList = Array(9)
  .fill(1)
  .map((n, i) => 100 * (i + 1));
  // console.log(userList);

  return (
    <ul className="grid grid-cols-3 m-10 gap-y-5 justify-items-center items-center">
      {/* {data.items?.map((item) => (
        <UserList key={item.id} item={item} />
      ))} */}

      {userList.map((key, i) => {
        return (
          <li key={key} className="w-[300px] h-[64px] rounded-[10px] bg-inputYellow flex justify-center items-center font-extrabold hover:bg-lionYellow hover:cursor-pointer" >
          <Link to="/selectenvelope">{userList[i]}</Link></li>
        )
      })}
    </ul>
  );
}

export default SelectUser
