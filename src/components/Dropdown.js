import React from "react";

const Dropdown = ({
  options,
  value,
  onChange,
  label,
  id,
  className,
  disabled,
}) => {
  return (
    <>
      <div className={className}>
        <label
          htmlFor={id}
          className="text-base font-medium line-clamp-3  tracking-wide  block mb-2  text-gray-700"
        >
          {label}
        </label>

        <div className="relative">
          <select
           className="block appearance-none w-full bg-white hover:border-gray-500 pr-8 leading-tight focus:outline-none focus:shadow-outline border border-gray-300 text-gray-600 text-base font-medium placeholder:text-gray-400 focus:shadow-md focus:ring-4 focus:ring-skin-500/20 focus:border-skin-600 p-3.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-4 dark:focus:border-skin-500"
            value={value}
            id={id}
            disabled={disabled}
            onChange={onChange}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M14.707 7.293a1 1 0 00-1.414 0L10 10.586 6.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 000-1.414z"
                clipRule="evenodd"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
