"use client";

import React, { useState, useEffect, useReducer, useMemo } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((event) => (event.id === payload.id ? payload : event));
    case "delete":
      return state.filter((event) => event.id !== payload.id);
    default:
      throw new Error();
  }
}

function initEvents() {
  if (typeof window !== "undefined") {
    const storageEvents = localStorage.getItem("savedEvents");
    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
    return parsedEvents;
  }
}

export default function DataLayer(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [types, setTypes] = useState([]);
  const [labels, setLabels] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );

  useEffect(() => {
    const getEvents = async () => {
      const appointments = await fetchEvents();
      setAppointments(appointments);
    };

    getEvents();
  }, []);

  const fetchEvents = async () => {
    const response = await fetch("http://localhost:3000/api/getAppointments");
    const data = await response.json();
    return data;
  };

  const filteredEvents = useMemo(() => {
    return savedEvents.filter((event) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl) => lbl.label)
        .includes(event.label)
    );
  }, [savedEvents, labels]);

  useEffect(() => {
    if (!showModal) {
      setSelectedEvent(null);
    }
  }, [showModal]);

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  useEffect(() => {
    setTypes((prevTypes) => {
      return [...new Set(appointments.map((app) => app.type))].map(
        (type) => {
        const currentType = prevTypes.find(
          (prevType) => prevType.type === type
        );
        return {
          type,
          checked: currentType ? currentType.checked : true,
        };
      });
    });
  }, [appointments]);

  useEffect(() => {
    setLabels((prevLabels) => {
      return [...new Set(savedEvents.map((event) => event.label))].map(
        (label) => {
          const currentLabel = prevLabels.find(
            (prevLabel) => prevLabel.label === label
          );
          return {
            label,
            checked: currentLabel ? currentLabel.checked : true,
          };
        }
      );
    });
  }, [savedEvents]);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  function updateLabels(label) {
    setLabels(labels.map((lbl) => (lbl.label === label.label ? label : lbl)));
  }

  function updateTypes(type) {
    setTypes(types.map((appType) => (appType.type === type.type ? type : appType)));
  }

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
        setShowModal,
        savedEvents,
        dispatchCalEvent,
        selectedEvent,
        setSelectedEvent,
        setLabels,
        labels,
        updateLabels,
        setTypes,
        types,
        updateTypes,
        filteredEvents,
        appointments,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
