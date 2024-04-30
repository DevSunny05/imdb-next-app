"use client"
import { ThemeProvider } from 'next-themes'
import React from 'react'

const Providers = ({children}) => {
  return (
    <ThemeProvider>
        <div className=''>
            {children}
        </div>
    </ThemeProvider>
  )
}

export default Providers