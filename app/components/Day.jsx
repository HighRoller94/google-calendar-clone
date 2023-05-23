import React, { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";

export default function Day({ day, rowIndex }) {
  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  };
  const { setDaySelected, setShowModal, filteredEvents, setSelectedEvent } =
    useContext(GlobalContext);
  const [dayEvents, setDayEvents] = useState([]);

  useEffect(() => {
    const events = filteredEvents.filter(
      (event) => dayjs(event.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  return (
    <div className="flex flex-col overflow-scroll border border-gray-200">
      <header className="flex flex-col items-center">
        {rowIndex === 0 && (
          <p className="mt-1 text-center text-sm">
            {day.format("ddd").toUpperCase()}
          </p>
        )}

        <p className={`my-1 p-1 text-center text-sm ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="div flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowModal(true);
        }}
      >
        {dayEvents.map((event, i) => (
          <div
            key={i}
            onClick={() => setSelectedEvent(event)}
            className={`bg-${event.label}-500 mb-1 flex flex-col
          items-start truncate rounded px-3 py-2`}
          >
            <p className="text-bold text-sm font-semibold text-white">
              {event.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
