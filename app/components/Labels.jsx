import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function Labels() {
  const { labels, updateLabels } = useContext(GlobalContext);
  return (
    <>
      <p className="mt-10 font-bold text-gray-500">Label</p>
      {labels.map(({ label: lbl, checked }, index) => (
        <div
          className="mt-2
          flex items-center"
        >
          <label key={index} className="block flex items-center">
            <input
              type="checkbox"
              onChange={() => updateLabels({ label: lbl, checked: !checked })}
              checked={checked}
              className={`form-checkbox h-5 w-5 ${lbl} cursor-pointer rounded focus:ring-0`}
            />
          </label>
          <span className="ml-2 capitalize text-gray-700">{lbl}</span>
        </div>
      ))}
    </>
  );
}
