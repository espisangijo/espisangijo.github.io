import { fa0, faTrafficLight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
function Resume() {
  return (
    
    <div>
        <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Projects</h1>
        <p className='my-8 font-light text-gray-500 text-md'>Projects I have done in my free time</p>

        
        <div className="flex flex-col justify-between mt-8 xs:flex-col">

            <div className="flex-1 px-6 py-6 mx-2 my-6 bg-yellow-100 border-t border-gray-200 cursor-not-allowed ">
              <div className='flex justify-between'>
                <dt className="text-2xl font-bold tracking-tight text-gray-400">🚧 &nbsp;ERP System</dt>
                <dt className="text-sm font-bold tracking-tight text-gray-400">Ongoing</dt>
              </div>
              <dd className="mt-2 text-sm text-gray-500"><span role="img" aria-label="construction">🚧</span> Under Construction <span role="img" aria-label="construction">🚧</span></dd>
              
            </div>


          <Link href="/xr">
            <div className="flex-1 px-6 py-6 mx-2 my-6 transition duration-150 delay-150 border-t border-gray-200 cursor-pointer my-4transition hover:border-gray-500 hover:bg-gray-50">
              <div className='flex justify-between'>
                <dt className="flex text-2xl font-bold tracking-tight text-gray-900">
                <Image 
                    src='/portal.png' 
                    width={32}
                    height={10}
                    alt="portal"
                  /> &nbsp;
                  The Settlement</dt>
                <dt className="text-sm font-bold tracking-tight text-gray-400">Ongoing</dt>
              </div>
              <dd className="mt-2 text-sm text-gray-500">The Settlement is a space built to create a digital presence in the metaverse.</dd>
              <div className='flex mt-4'>
              <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">A-frame</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">React</span>
              </div>
            </div>
          </Link>

          <Link href="https://github.com/espisangijo/DelightAssistant">
            <div className="flex-1 px-6 py-6 mx-2 my-6 transition duration-150 delay-150 border-t border-gray-200 cursor-pointer my-4transition hover:border-gray-500 hover:bg-gray-50">
              <div className='flex justify-between'>
                <dt className="text-2xl font-bold tracking-tight text-gray-900">🤖 &nbsp;Delight Voice SDK</dt>
                <dt className="text-sm font-bold tracking-tight text-gray-400">Sep 2021</dt>
              </div>
              <dd className="mt-2 text-sm text-gray-500">Delight is a platform for anyone to develop their own voice assistant. For developers who wants to integrate Delight Assistant into their app, it is now possible in just a few steps. Delight Voice SDK provides the UI, permissions handling, and Delight API so that developers can focus on the core functionalities of their app.</dd>
              <div className='flex mt-4'>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Kotlin</span>
              </div>
            </div>
          </Link>

          <Link href="https://github.com/espisangijo/square-app">
            <div className="flex-1 px-6 py-6 mx-2 my-6 transition duration-150 delay-150 border-t border-gray-200 cursor-pointer my-4transition hover:border-gray-500 hover:bg-gray-50">
              <div className='flex justify-between'>
                <dt className="text-2xl font-bold tracking-tight text-gray-900">🎡 &nbsp;Square App</dt>
                <dt className="text-sm font-bold tracking-tight text-gray-400">Sep 2020</dt>
              </div>
              <dd className="mt-2 text-sm text-gray-500">Inspired by GoodNotes, this project aims to solve the problem in creating squares in the application. Looking like an image data, intuitively people will work on it using image processing techniques in the feature engineering stage. However, one of the most valuable data is not taken into account when processing using aforementioned technique - time. Time is essential in predicting whether a stroke results in a square or not. Square app is a data playground to add training data and perform predictions on square drawings.</dd>
              <div className='flex mt-4'>
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Python</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">Javascript</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">React</span>
                <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Falcon</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Docker</span>
                <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">SVM</span>
              </div>
            </div>
          </Link>

          <Link href="https://github.com/espisangijo/avocado">
            <div className="flex-1 px-6 py-6 mx-2 my-6 transition duration-150 delay-150 border-t border-gray-200 cursor-pointer hover:border-gray-500 hover:bg-gray-50">
              <div className='flex justify-between'>
                <dt className="text-2xl font-bold tracking-tight text-gray-900">🥑 &nbsp;Avocado Analysis</dt>
                <dt className="text-sm font-bold tracking-tight text-gray-400">Jul 2020</dt>
              </div>
              <dd className="mt-2 text-sm text-gray-500">Avocados, like other types of fruit bearing trees, need ample water to thrive and produce fruit. Mature avocado trees need approximately 40 to 50 inches of rain per year. This project explores weather and geographic data to analyze different conditions affecting avocado plantations.</dd>
              <div className='flex mt-4'>
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Python</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">Exploratory Data Analysis</span>
              </div>
            </div>
          </Link>

          
          <Link href="https://github.com/espisangijo/financial-news-analytics">
            <div className="flex-1 px-6 py-6 mx-2 my-6 transition duration-150 delay-150 border-t border-gray-200 cursor-pointer hover:border-gray-500 hover:bg-gray-50">
              <div className='flex justify-between'>
                <dt className="text-2xl font-bold tracking-tight text-gray-900">📈 &nbsp;Financial News Analytics (PDF)</dt>
                <dt className="text-sm font-bold tracking-tight text-gray-400">Apr 2019</dt>
              </div>
              <dd className="mt-2 text-sm text-gray-500">Predicting price movements in the market with a combination of technical analysis and sentiment analysis on financial news.</dd>

              <div className='flex mt-4'>
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Python</span>
                <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">LSTM</span>
              </div>
            </div>
          </Link>
          <Link href="https://github.com/espisangijo/coauthorship">
            <div className="flex-1 px-6 py-6 mx-2 my-6 transition duration-150 delay-150 border-t border-gray-200 cursor-pointer hover:border-gray-500 hover:bg-gray-50">
              <div className='flex justify-between'>
                <dt className="text-2xl font-bold tracking-tight text-gray-900">🌐 &nbsp;Coauthorship Network Analysis</dt>
                <dt className="text-sm font-bold tracking-tight text-gray-400">Dec 2018</dt>
              </div>
              <dd className="mt-2 text-sm text-gray-500">A network of co-authors can be visualized with a graph of vertices and edges representing the authors and relationship with co-authors respectively. This project mapped out the relationships and presents unique point-of-view of the network attributes.</dd>

              <div className='flex mt-4'>
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Python</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">networkx</span>
              </div>
            </div>
          </Link>
        </div>
    </div>
  )
}

export default Resume