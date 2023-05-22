import React from 'react'
import dayjs from 'dayjs'

export default function Day({ day, rowIndex }) {

  const getCurrentDayClass= () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? 'bg-blue-600 text-white rounded-full w-7' : '';
  }

  return (
    <div className="border border-gray-200 flex flex-col">
        <header className="flex flex-col items-center">
          {rowIndex === 0 && (
            <p className="text-sm mt-1 text-center">{day.format('ddd').toUpperCase()}</p>
          )}

          <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
            {day.format('DD')}
          </p>
        </header>
    </div>
  )
}
