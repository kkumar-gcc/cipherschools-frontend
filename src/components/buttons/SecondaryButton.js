function SecondaryButton(props) {
  return (
    <span className={props.fullWidth ? "flex" : "inline-flex"}>
      <button
        type={props.type}
        onClick={props.onClick}
        className="w-full text-skin-base bg-skin-500 text-base capatalize py-2 px-4 leading-6 cursor-pointer inline-flex flex-row justify-center items-center no-underline rounded-md font-medium transition duration-200 ease-in-out shadow-md "
      >
        {props.children}
      </button>
    </span>
  );
}

export default SecondaryButton;
