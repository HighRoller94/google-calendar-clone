'use client'

import './globals.css'
import { openSans } from '@/util/fonts'
import DataLayer from './context/DataLayer'
import AddEventModal from './components/EventModal';
import { useContext, useState } from 'react';
import GlobalContext from './context/GlobalContext';

export default function RootLayout({ children }) {
  const { showModal } = useContext(GlobalContext)
  return (
    <html lang="en">
      <DataLayer>
        <body className={openSans.className}>
          {children}
        </body>
      </DataLayer>
    </html>
  )
}
