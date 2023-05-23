import React, { useContext } from "react";
import Image from "next/image";
import GlobalContext from "../context/GlobalContext";

export default function CreateEventButton() {
  const { showModal, setShowModal } = useContext(GlobalContext);

  const handleModal = () => {
    setShowModal(true);
    console.log(showModal);
  };

  return (
    <button
      onClick={handleModal}
      className="flex items-center rounded-full border p-2 shadow-md hover:shadow-xl"
    >
      <div className="relative h-8 w-8">
        <Image src="/plus.svg" fill alt="calendarLogo" className="h-8 w-8" />
      </div>

      <p className="pl-3 pr-3">Create</p>
    </button>
  );
}
