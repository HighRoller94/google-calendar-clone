"use client";
import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { getMonth } from "@/util/util";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";
import CalendarHeader from "./components/CalendarHeader";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";
import "./app.css";

export default function Home() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      {showModal && <EventModal />}
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
}
