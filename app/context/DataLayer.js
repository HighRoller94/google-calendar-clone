'use client'

import React, { useState, useEffect } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

export default function DataLayer(props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month())
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null)
    const [daySelected, setDaySelected] = useState(null)
    const [showModal, setShowModal] = useState(false)
    
    useEffect(() => {
        if (smallCalendarMonth !== null) {
            setMonthIndex(smallCalendarMonth)
        }
    }, [smallCalendarMonth])

    return (
        <GlobalContext.Provider
            value={{
                monthIndex,
                setMonthIndex,
                smallCalendarMonth,
                setSmallCalendarMonth,
                daySelected,
                setDaySelected,
                showModal,
                setShowModal
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
