import React from "react";

function Input(props) {
  return (
    <div className={props.className}>
      <label htmlFor={props.id} className="text-base font-medium line-clamp-3  tracking-wide  block mb-2  text-gray-700">{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        onChange={props.onChange}
        value={props.value}
        name={props.name}
        disabled={props.disabled}
        required={props.required}
        className="border border-gray-300 text-gray-600 text-base font-medium placeholder:text-gray-400 focus:shadow-md focus:ring-4 focus:ring-skin-500/20 focus:border-skin-600 block w-full p-3.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-4 dark:focus:border-skin-500"
      />
    </div>
  );
}

export default Input;
