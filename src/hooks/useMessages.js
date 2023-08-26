export function useUpdate() {
  return async function updateMessage(messageId, messageData) {
    return await fetch(
      `https://likelion-mailbox.pockethost.io/api/collections/test_message/records/${messageId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
      },
    );
  };
}

export function useDelete() {
  return async function deleteMessage(deleteId) {
    return await fetch(
      `https://likelion-mailbox.pockethost.io/api/collections/test_message/records/${deleteId}`,
      {
        method: "DELETE",
      },
    );
  };
}
