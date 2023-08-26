import useFetchData from "./useFetchData";

const getEndpoint = (messageId) =>
  `https://likelion-mailbox.pockethost.io/api/collections/test_message/records/${messageId}`;

function useMessageItem(messageId) {
  return useFetchData(getEndpoint(messageId));
}

export default useMessageItem;
