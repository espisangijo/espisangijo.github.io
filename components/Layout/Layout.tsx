import Link from 'next/link';
import React, { ReactElement, useContext, useEffect, useRef } from 'react'

interface LayoutProps {
    children: React.ReactNode;
 }

function Layout({children} : LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col items-center justify-between max-w-4xl min-h-screen px-4 mx-auto sm:px-6 lg:px-8">
        {children}
        <footer className="flex justify-end w-full pt-3 my-8 border-t-2">
          <Link href="https://github.com/espisangijo">
            <a className='mx-4 text-gray-400 border-b-2 border-dotted'>Github</a>
          </Link>
          <Link className='' href="https://www.linkedin.com/in/jacky-a-89277a12b/">
            <a className='mx-4 text-gray-400 border-b-2 border-dotted '>LinkedIn</a>
          </Link>
        </footer>
        </div>
    </div>
  )
}

export default Layout