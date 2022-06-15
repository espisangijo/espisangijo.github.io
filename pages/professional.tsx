import React from 'react'

function Professional() {
  return (
    
    <div className='min-w-full '>
        <div className='py-24'>
            <h2 className='text-4xl font-extrabold tracking-tight text-gray-900'>Professional Experience</h2>

            <div className='flex flex-col py-12'>

                <div className='my-6'>
                    <h2 className='text-3xl font-light tracking-tight text-black'>Delight Labs</h2>
                    <h4 className='font-bold text-blue-400 uppercase text-md'>Software Engineer</h4>

                    <div className='my-3 '>
                    <h3>Search Engine</h3>
                    <ul className='mx-6 my-1 list-disc list-outside'>
                        <li className='list-item text-md '>Developed an end-to-end micro search engine consisting of a web crawler, persistent storage, change data capture (CDC), text embedding server and indexer.</li>
                        <li className='list-item text-md '>Linked persistent storage to the indexer using Debezium (on top of Apache Kafka)</li>
                        <li className='list-item text-md '>Developed an admin tool for managing Elasticsearch indices</li>
                        <li className='list-item text-md '>Customized Elasticsearch&lsquo;s user authentication for internal admin tool</li>
                        <li className='list-item text-md '>Performed integration and end-to-end testing using test servers for Elasticsearch.</li>
                        <li className='list-item text-md '>Designed chatbot using Rasa NLU to communicate with our Search API of the search engine.</li>
                        <li className='list-item text-md '>Integrated a WebXR client to the chatbot and search engine for teleportation between XR worlds.</li>
                    </ul>
                    </div>

                    <div className='my-3 '>
                    <h3>Tech Research</h3>
                    <ul className='mx-6 my-1 list-disc list-outside'>
                        <li className='list-item text-md '>Developed a Unity application for a VR store for testing purposes.</li>
                        <li className='list-item text-md '>Researched on information retrieval method and design</li>
                        <li className='list-item text-md '>Researched blockchain technologies and existing blockchain projects. Developed smart contracts on Ethereum testnets</li>
                        <li className='list-item text-md '>Researched and developed mobile multi-platform technologies in an experiment for a multi-platform SDK.</li>
                    </ul>
                    </div>

                    <div className='my-3 '>
                    <h3>Voice App</h3>
                    <ul className='mx-6 my-1 list-disc list-outside'>
                        <li className='list-item text-md '>Developed an Android module which allow others to integrate voice capabilities into their app.</li>
                        <li className='list-item text-md '>Developed adapters using webhooks for multiple messenger APIs to interact with.</li>
                    </ul>
                    </div>
                </div>
                <div className='my-6'>
                    <h2 className='text-3xl font-light tracking-tight text-black'>Shopee</h2>
                    <h4 className='font-bold text-orange-400 uppercase text-md'>Associate Data Scientist</h4>

                    <div className='my-3 '>
                    <h3>Internal Preprocessing Tool</h3>
                    <ul className='mx-6 my-1 list-disc list-outside'>
                        <li className='list-item text-md '>Developed an end-to-end micro search engine consisting of a web crawler, persistent storage, change data capture, text embedding server and Elasticsearch</li>
                        <li className='list-item text-md '>Performed unit testing and load testing on APIs before entering the UAT and production stage.</li>
                        <li className='list-item text-md '>Developed and deployed APIs using the Falcon web framework which consistently performs well on high loads.</li>
                    </ul>
                    </div>

                    <div className='my-3 '>
                    <h3>Post-mortem Chatbot Analysis</h3>
                    <ul className='mx-6 my-1 list-disc list-outside'>
                        <li className='list-item text-md '>Performed data clustering on noisy text data to assist in a slot-filling task.</li>
                        <li className='list-item text-md '>Analyzed the multi-dimensional data to find the optimum amount of clusters using mathematical methods.</li>
                        <li className='list-item text-md '>Implemented active learning to overcome the problem faced by both unsupervised and supervised learning.</li>
                        <li className='list-item text-md '>Experimented on different word/sentence embeddings (e.g. BERT embedding, fastText embedding, word2vec, GloVe, TF-IDF) to compare the strengths and weaknesses in different NLP tasks.</li>
                    </ul>
                    </div>

                    <div className='my-3 '>
                    <h3>Customer Service Sentiment Analysis</h3>
                    <ul className='mx-6 my-1 list-disc list-outside'>
                        <li className='list-item text-md '>Fine-tuned a pre-trained model (BERT) to perform sentiment analysis on noisy structured data</li>
                        <li className='list-item text-md '>Performed sentiment analysis on South East Asian languages.</li>
                        <li className='list-item text-md '>Preprocess email data into a chat-like structure</li>
                    </ul>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Professional