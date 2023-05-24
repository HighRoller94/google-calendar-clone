import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},
  daySelected: null,
  setDaySelected: (day) => {},
  showModal: false,
  setShowModal: () => {},
  dispatchCalEvent: ({type, payload}) => {},
  savedEvents: [],
  appointments: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
  setTypes: () => {},
  types: [],
  updateTypes: () => {},
  filteredEvents: [],
});

export default GlobalContext;
