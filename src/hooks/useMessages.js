// PocketBase SDK 활용편
import { useState } from "react";
import pb from "./pocketbase";

// SDK 처리 함수를 포함하는 사용자 정의 훅 작성
export function useMessages() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("pending");

  async function getMessageList() {
    try {
      setStatus("loading");
      const message = await pb.collection("test_message").getFullList();
      console.log(message);
      setData(message);

      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  }

  return {
    data,
    status,
    getMessageList,
  };
}
