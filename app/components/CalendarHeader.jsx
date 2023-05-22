import React, { useContext } from 'react'
import Image from 'next/image'
import GlobalContext from '../context/GlobalContext'

import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'
import dayjs from 'dayjs'

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext)
  const currentMonthIndex = dayjs().month();
  
  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1)
  }

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1)
  }

  const handleReset = () => {
    const newMonthIndex = monthIndex === currentMonthIndex ? monthIndex + Math.random() : currentMonthIndex;
    setMonthIndex(newMonthIndex);
  }

  return (
    <header className="px-4 py-2 flex items-center">
      <div className="relative w-12 h-12 mr-2">
        <Image
          src="/logo.png"
          fill
          alt="calendarLogo"
        />
      </div>
      <div className="mr-10 text-xl text-gray-500 font-bold">
        Calendar
      </div>
      <button className="border rounded py-2 px-4 mr-5" onClick={handleReset}>
        Today
      </button>
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

      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  )
}
