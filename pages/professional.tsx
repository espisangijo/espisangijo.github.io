import React from 'react'

function Professional() {
  return (
    
    <div className=' min-w-full'>
        <div className='py-24'>
            <h2 className='text-4xl font-extrabold tracking-tight text-gray-900'>Professional Experience</h2>

            <div className='flex flex-col py-12'>

                <div className='my-6'>
                    <h2 className='font-bold tracking-tight text-3xl text-black'>Delight Labs</h2>
                    <h4 className='uppercase font-bold text-blue-400 text-md'>Software Engineer</h4>

                    <div className=' my-3'>
                    <h3>Search Engine</h3>
                    <ul className='list-disc list-outside my-1 mx-6'>
                        <li className='list-item text-md '>Developed an end-to-end micro search engine consisting of a web crawler, persistent storage, change data capture, text embedding server and Elasticsearch</li>
                        <li className='list-item text-md '>Designed a chatbot using Rasa NLU component to communicate with our Search API of the search engine</li>
                        <li className='list-item text-md '>Integrated WebXR client to the chatbot for teleportation between and within XR worlds</li>
                        <li className='list-item text-md '>Researched blockchain technologies and existing blockchain projects. Developed smart contracts on testnets.</li>
                    </ul>
                    </div>

                    <div className=' my-3'>
                    <h3>Voice App</h3>
                    <ul className='list-disc list-outside my-1 mx-6'>
                        <li className='list-item text-md '>Developed an Android library module for mobile developers to integrate into their apps.</li>
                        <li className='list-item text-md '>Researched and developed mobile multi-platform technologies in an experiment for a multi-platform SDK.</li>
                        <li className='list-item text-md '>Developed adapters using webhooks for messenger API to interact with.</li>
                    </ul>
                    </div>
                </div>
                <div className='my-6'>
                    <h2 className='font-bold tracking-tight text-3xl text-black'>Shopee</h2>
                    <h4 className='uppercase font-bold text-orange-400 text-md'>Associate Data Scientist</h4>

                    <div className=' my-3'>
                    <h3>Search Engine</h3>
                    <ul className='list-disc list-outside my-1 mx-6'>
                        <li className='list-item text-md '>Developed an end-to-end micro search engine consisting of a web crawler, persistent storage, change data capture, text embedding server and Elasticsearch</li>
                        <li className='list-item text-md '>Designed a chatbot using Rasa NLU component to communicate with our Search API of the search engine</li>
                        <li className='list-item text-md '>Integrated WebXR client to the chatbot for teleportation between and within XR worlds</li>
                        <li className='list-item text-md '>Researched blockchain technologies and existing blockchain projects. Developed smart contracts on testnets.</li>
                    </ul>
                    </div>

                    <div className=' my-3'>
                    <h3>Voice App</h3>
                    <ul className='list-disc list-outside my-1 mx-6'>
                        <li className='list-item text-md '>Developed an Android library module for mobile developers to integrate into their apps.</li>
                        <li className='list-item text-md '>Researched and developed mobile multi-platform technologies in an experiment for a multi-platform SDK.</li>
                        <li className='list-item text-md '>Developed adapters using webhooks for messenger API to interact with.</li>
                    </ul>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Professional