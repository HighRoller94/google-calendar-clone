import React, { useContext } from 'react'
import { MdClose, MdOutlineDragHandle } from 'react-icons/md'
import GlobalContext from '../context/GlobalContext'

export default function AddEventModal() {
  const { setShowModal } = useContext(GlobalContext)

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="text-gray-400 text-2xl">
            <MdOutlineDragHandle />
          </span>
          <button onClick={() => setShowModal(false)}>
            <span className="text-gray-400 text-2xl">
              <MdClose />
            </span>
          </button>
        </header>
      </form>
    </div>
  )
}
