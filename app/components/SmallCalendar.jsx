import { getMonth } from "@/util/util";
import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import GlobalContext from "../context/GlobalContext";

export default function SmallCalendar() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, setSmallCalendarMonth, daySelected, setDaySelected } =
    useContext(GlobalContext);

  const handlePrevMonth = () => {
    setCurrentMonthIndex(currentMonthIndex - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex(currentMonthIndex + 1);
  };

  const getCurrentDayClass = (day) => {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currentDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);

    if (nowDay === currentDay) {
      return "bg-blue-500 rounded-full text-white";
    } else if (currentDay === slcDay) {
      return "bg-blue-100 rounded-full text-blue-600 font-bold";
    } else {
      return "";
    }
  };

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);

  useEffect(() => {
    setCurrentMonthIndex(monthIndex);
  }, [monthIndex]);

  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="p text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
            "MMMM YYYY"
          )}
        </p>
        <div className="flex justify-between">
          <button onClick={handlePrevMonth}>
            <span className="cursor-pointer text-gray-600 text-2xl">
              <BiChevronLeft />
            </span>
          </button>
          <button onClick={handleNextMonth}>
            <span className="cursor-pointer text-gray-600 text-2xl">
              <BiChevronRight />
            </span>
          </button>
        </div>
      </header>
      <div className="div grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-sm py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIndex);
                  setDaySelected(day);
                }}
                className={`py-1 w-full ${getCurrentDayClass(day)}`}
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
