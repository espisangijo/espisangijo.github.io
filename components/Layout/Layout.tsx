import Link from 'next/link';
import React, { ReactElement, useContext, useEffect, useRef } from 'react'

interface LayoutProps {
    children: React.ReactNode;
 }

function Layout({children} : LayoutProps) {
  return (
    <div className="bg-white min-h-screen">
      <div className="flex flex-col justify-between min-h-screen max-w-4xl mx-auto px-4 items-center sm:px-6 lg:px-8">
        {children}
        
        <footer className="flex justify-end w-full my-12 border-t-2 pt-3">

          <Link href="https://github.com/espisangijo">
            <a className='text-gray-400 border-dotted border-b-2 mx-4'>Github</a>
          </Link>
          <Link className='' href="https://www.linkedin.com/in/jacky-a-89277a12b/">
            <a className=' text-gray-400 border-dotted border-b-2 mx-4'>LinkedIn</a>
          </Link>
        </footer>
        </div>
    </div>
  )
}

export default Layout