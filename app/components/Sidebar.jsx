import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";

export default function Sidebar() {
  return (
    <aside className="border border-white-200 dark:border-slate-600 p-5 w-64">
      <CreateEventButton />
      <SmallCalendar /> 
      <Labels />
    </aside>
  );
}
