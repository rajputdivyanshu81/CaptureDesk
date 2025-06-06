import React from 'react'
import { ReactNode } from 'react'
import Navbar from "@/components/Navbar"
const Layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
          <Navbar/>
    {children}
    </div>
   
  )
}

export default Layout