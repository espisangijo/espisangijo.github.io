import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card/Card'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
const Home: NextPage = () => {
  return (
    <div>
        <div className='py-24'>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Lorem Ipsum</h2>
          <p className="mt-4 text-gray-500">
            I am fascinated by Artificial Intelligence, Backend Systems and Financial Technologies. Currently I am working as a Software Engineer @ Delight Labs
          </p>

          <dl className="mt-16 flex xs:flex-col justify-between">
            <Link href="/about">
              <div className="border-t border-gray-200 cursor-pointer py-4 flex-1 mx-2 transition delay-150 duration-150 hover:border-gray-500 hover:bg-gray-50 px-3">
                <dt className="font-medium text-gray-900">About</dt>
                <dd className="mt-2 text-sm text-gray-500">More information about myself</dd>
              </div>
            </Link>

            <Link href="/professional">
              <div className="border-t border-gray-200 cursor-pointer py-4 flex-1 mx-2 transition delay-150 duration-150 hover:border-gray-500 hover:bg-gray-50 px-3">
                <dt className="font-medium text-gray-900">Professional</dt>
                <dd className="mt-2 text-sm text-gray-500">My working experience</dd>
              </div>
            </Link>

            <Link href="/projects">
              <div className="border-t border-gray-200 cursor-pointer py-4 flex-1 mx-2 transition delay-150 duration-150 hover:border-gray-500 hover:bg-gray-50 px-3">
                <dt className="font-medium text-gray-900">Projects</dt>
                <dd className="mt-2 text-sm text-gray-500">Coding related things I do on my free time</dd>
              </div>
            </Link>

          </dl>
        </div>


        

    </div>
  )
}

export default Home
