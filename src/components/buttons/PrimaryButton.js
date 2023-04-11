function PrimaryButton(props) {
    return (
      <span className={props.fullWidth ? "flex" : "inline-flex"}>
        <button
          type={props.type}
          className="bg-skin-base  capatalize py-2 px-4 leading-6 border inline-flex flex-row justify-center items-center no-underline rounded-md font-semibold cursor-pointer transition duration-200 ease-in-out shadow-sm shadow-gray-100"
        >
          {props.children}
        </button>
      </span>
    );
  }
  
  export default PrimaryButton;
  