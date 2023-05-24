'use client'

import './globals.css'
import DataLayer from './context/DataLayer'
import { ThemeProvider } from 'next-themes';

export const metadata = {
  title: 'NextJS Calendar',
  description: 'Simple calendar app built with NextJS',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <DataLayer>
        <ThemeProvider enableSystem={true} attribute='class'>
          <body>
            {children}
          </body>
        </ThemeProvider>
      </DataLayer>
    </html>
  )
}
