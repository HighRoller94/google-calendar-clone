import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function Labels() {
  const { types, updateTypes } = useContext(GlobalContext);
  return (
    <>
      <p className="mt-10 mb-6 font-bold text-gray-500">Appointment Types</p>
      {types.map(({ type: appType, checked }, index) => (
        <div
          className="mt-2
          flex items-center"
        >
          <label key={index} className="block flex items-center">
            <input
              type="checkbox"
              onChange={() => updateTypes({ type: appType, checked: !checked })}
              checked={checked}
              className={`form-checkbox h-5 w-5 cursor-pointer rounded focus:ring-0 bg-white text-gray-700`}
            />
          </label>
          <span className="ml-2 capitalize font-semibold text-gray-700 dark:text-gray-200">{appType}</span>
        </div>
      ))}
    </>
  );
}
