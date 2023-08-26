import useFetchData from "./useFetchData";

const endpoint = `${
  import.meta.env.VITE_PB_API
}/collections/test_message/records`;

function useMessageList() {
  return useFetchData(endpoint);
}

export default useMessageList;
