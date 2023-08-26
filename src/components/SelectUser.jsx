import { pb } from "@/api/pocketbase";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function SelectUser() {

  
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('pending');

  async function getUserList() {
    try {
      setStatus('loading');
      const getUserName = await pb.collection('test_users').getFullList();
      setData(getUserName);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <ul className="grid grid-cols-3 m-10 gap-y-5 justify-items-center items-center">
      {data.map((items, index) => {
        return (
          <li 
            key={index}
            onClick={() => {window.location.href = "/selectenvelope"}} 
            className="w-[300px] h-[64px] rounded-[10px] bg-inputYellow flex justify-center items-center font-extrabold hover:bg-lionYellow hover:cursor-pointer" >
            <Link to="/selectenvelope">
              {items.user_name}
            </Link>
          </li>
        )
      })}
    </ul>
  );
}

export default SelectUser
