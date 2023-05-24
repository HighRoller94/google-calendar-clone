import React, { useContext, useState } from "react";
import {
  MdClose,
  MdOutlineDragHandle,
  MdSchedule,
  MdOutlineDescription,
  MdBookmarkBorder,
  MdCheck,
  MdDeleteOutline,
} from "react-icons/md";

import GlobalContext from "../context/GlobalContext";
import { createPost } from "../../sanity";

export default function EventModal() {
  const labelClasses = [
    "bg-indigo-400",
    "bg-gray-400", 
    "bg-green-400",
    "bg-red-400",
    "bg-blue-400",
    "bg-purple-400",
  ];



  const { setShowModal, daySelected, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);
  const [name, setName] = useState(selectedEvent ? selectedEvent.setName : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelClasses.find((label) => label === selectedEvent.label)
      : labelClasses[0]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      _type: "appointments",
      name: name,
      date: daySelected,
    }
    createPost(postData)
    setShowModal(false);
  }


  function handleSubmitd(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      day: daySelected.valueOf(),
      label: selectedLabel,
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }
    setShowModal(false);
  }

  return (
    <div className="fixed left-0 top-0 flex h-screen w-full items-center justify-center">
      <form className="w-1/4 rounded-lg bg-white shadow-2xl">
        <header className="flex items-center justify-between bg-gray-100 px-4 py-2">
          <span className="text-2xl text-gray-400">
            <MdOutlineDragHandle />
          </span>
          <div className="flex">
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({ type: "delete", payload: selectedEvent });
                  setShowModal(false);
                }}
                className="cursor-pointer text-2xl text-gray-400"
              >
                <MdDeleteOutline />
              </span>
            )}
            <button onClick={() => setShowModal(false)}>
              <span className="text-2xl text-gray-400">
                <MdClose />
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="name"
              placeholder="Add Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border-0 border-b-2 border-gray-200 pb-2 pt-3 text-xl font-semibold text-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0"
            />
            <span className="text-2xl text-gray-400">
              <MdSchedule />
            </span>
            <p>{daySelected.format("dddd, MMMM DD")}</p>
            <span className="text-2xl text-gray-400">
              <MdOutlineDescription />
            </span>
            <input
              type="text"
              name="description"
              placeholder="Add Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full border-0 border-b-2 border-gray-200 pb-2 pt-3 text-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0"
            />
            <span className="text-2xl text-gray-400">
              <MdBookmarkBorder />
            </span>
            <div className="flex gap-x-2">
              {labelClasses.map((labelClass, index) => (
                <span
                  key={index}
                  onClick={() => setSelectedLabel(labelClass)}
                  className={`${labelClass} flex h-6 w-6 cursor-pointer items-center justify-center rounded-full`}
                >
                  {selectedLabel === labelClass && (
                    <span className="text-sm text-white">
                      <MdCheck />
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="mt-5 flex justify-end border-t p-3">
          <button
            type="submit"
            onClick={handleSubmit}
            className="rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
