'use client'

import './globals.css'
import { openSans, inter } from '@/util/fonts'
import DataLayer from './context/DataLayer'
import AddEventModal from './components/EventModal';
import { useContext, useState } from 'react';
import GlobalContext from './context/GlobalContext';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({ children }) {
  const { showModal } = useContext(GlobalContext)
  return (
    <html lang="en">
      <DataLayer>
        <ThemeProvider enableSystem={true} attribute='class'>
          <body className={inter.className}>
            {children}
          </body>
        </ThemeProvider>
      </DataLayer>
    </html>
  )
}
