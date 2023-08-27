import SendButton from './SendButton';

function WriteMessage({className}) {
  return (
    <>
      <form action="" method="POST">
        <textarea
          className={className}
          name="message"
          cols="30"
          rows="10"
        ></textarea>
        <SendButton />
      </form>
    </>
  );
}

export default WriteMessage;
