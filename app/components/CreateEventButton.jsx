import React, { useContext } from 'react'
import Image from 'next/image'
import GlobalContext from '../context/GlobalContext'

export default function CreateEventButton() {
    const { showModal, setShowModal } = useContext(GlobalContext)

    const handleModal = () => {
        setShowModal(true)
        console.log(showModal)
    }

    return (
        <button onClick={handleModal} className="border p-2 rounded-full flex items-center shadow-md hover:shadow-xl">
            <div className="relative w-8 h-8">
                <Image
                    src="/plus.svg"
                    fill
                    alt="calendarLogo"
                    className="w-8 h-8"
                />
            </div>

            <p className="pl-3 pr-3">Create</p>
        </button>
    )
}
