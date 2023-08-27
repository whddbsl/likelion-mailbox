import { pb } from "@/api/pocketbase";
import { useEffect } from "react";
import { useState } from "react";
import GoToEnvelope from "./GoToEnvelope";

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
      {data.map((item) => {
        const keyId = item.id
        const name = item.user_name
        return (
          <li 
            key={keyId}
            className="w-[300px] h-[64px] rounded-[10px] bg-inputYellow hover:bg-lionYellow hover:cursor-pointer" >
              <GoToEnvelope name={name} keyId={keyId}/>
          </li>
        )
      })}
    </ul>
  );
}

export default SelectUser
