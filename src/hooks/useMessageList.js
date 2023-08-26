import useFetchData from "./useFetchData";

const endpoint = `https://likelion-mailbox.pockethost.io/api/collections/test_message/records`;

function useMessageList() {
  return useFetchData(endpoint);
}

export default useMessageList;
