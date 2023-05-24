import React, { useContext } from "react";
import Image from "next/image";
import GlobalContext from "../context/GlobalContext";
import ThemeSwitch from "./ThemeSwitch";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

import dayjs from "dayjs";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  const currentMonthIndex = dayjs().month();

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  const handleReset = () => {
    const newMonthIndex =
      monthIndex === currentMonthIndex
        ? monthIndex + Math.random()
        : currentMonthIndex;
    setMonthIndex(newMonthIndex);
  };

  return (
    <header className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center">
        <div className="relative mr-2 h-12 w-12">
          <Image src="/logo.png" fill alt="calendarLogo" />
        </div>
        <div className="mr-10 text-xl text-gray-500 dark:text-gray-100">
          Calendar
        </div>
        <button className="mr-5 rounded border px-4 py-2" onClick={handleReset}>
          Today
        </button>
        <div className="flex justify-between">
          <button onClick={handlePrevMonth}>
            <span className="cursor-pointer text-2xl text-gray-500 dark:text-gray-100">
              <BiChevronLeft />
            </span>
          </button>
          <button onClick={handleNextMonth}>
            <span className="cursor-pointer text-2xl text-gray-500 dark:text-gray-100">
              <BiChevronRight />
            </span>
          </button>
        </div>
        <h2 className="ml-4 text-xl text-gray-800 dark:text-gray-100">
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2>
      </div>
      <div className="flex items-center">
        <ThemeSwitch />
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white cursor-pointer"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
    </header>
  );
}
