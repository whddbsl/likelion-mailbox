import { useState } from "react";
import pb from "@/pocketbase";

export function useEnvelope() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("pending");

  async function getEnvelopeList() {
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
    getEnvelopeList,
  };
}
