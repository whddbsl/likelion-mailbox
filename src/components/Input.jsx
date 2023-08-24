function Input({ id, placeholderText, text = '' }) {
  return (
    <>
      <div className="flex pb-6 ">
        <label htmlFor={id} className="flex-grow pr-2">
          {text}
        </label>
        <input
          type="text"
          id={id}
          name={id}
          className="shrink-0 bg-inputYellow placeholder:pl-4
              placeholder:text-black"
          placeholder={placeholderText}
        />
      </div>
    </>
  );
}

export default Input;
