import {
  fa0,
  faTrafficLight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import Image from "next/image";
function Resume() {
  return (
    <div>
      <div className="my-8">
        {" "}
        {/* Added margin-bottom for spacing */}
        <Link href="/">
          <div>
            {" "}
            {/* Use legacyBehavior for <a> tag inside Link for specific styling/behavior if needed */}
            <a className="text-blue-600 hover:text-blue-800 hover:underline text-md font-semibold">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />{" "}
              {/* Added icon */}
              Back to Home
            </a>
          </div>
        </Link>
      </div>

      <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
        Projects
      </h1>
      <p className="my-8 font-light text-gray-500 text-md">
        Projects I have done in my free time
      </p>

      <div className="flex flex-col justify-between mt-8 xs:flex-col">
        <div className="flex-1 px-6 py-6 mx-2 my-6 border-t border-gray-200 cursor-not-allowed ">
          <div className="flex justify-between">
            <dt className="text-2xl font-bold tracking-tight text-gray-400">
              🚧 &nbsp;Algorithmic Trading System
            </dt>
            <dt className="text-sm font-bold tracking-tight text-gray-400">
              Ongoing
            </dt>
          </div>
          <dd className="mt-2 text-sm text-gray-500">
            This project focuses on the development of a comprehensive
            algorithmic trading system designed for personal research and
            learning. It explores the full lifecycle of quantitative strategy
            development, from data acquisition to execution. Key learning
            objectives include mastering data ingestion techniques for both
            real-time streaming (e.g., market ticks) and batch historical data,
            utilizing <b>Kafka</b> for robust data pipelines across
            microservices. Data transformation and workflow orchestration are
            managed with <b>Airflow</b>. Inter-service communication is
            efficiently handled using <b>gRPC</b>. <br />
            <br />A significant aspect involves implementing mathematical
            finance concepts, such as <b>Monte Carlo simulations</b> and{" "}
            <b>Brownian motion models</b>, often in C++ to explore performance
            and language proficiency. The system integrates with live trading
            platforms via the <b>Interactive Brokers (IB) Gateway</b> and{" "}
            <b>Binance API</b>. Portfolio construction techniques, including{" "}
            <b>Mean Variance Optimization</b>, are also implemented and
            explored. This project serves as a practical environment for
            applying software engineering best practices to quantitative finance
            challenges.
          </dd>
          <div className="flex mt-4">
            <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              Python
            </span>
            <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-blue-800">
              Kafka
            </span>
            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-blue-800">
              TimescaleDB
            </span>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-blue-800">
              Airflow
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              gRPC
            </span>
            <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-blue-800">
              C++
            </span>
          </div>
        </div>

        <Link href="https://github.com/BrianWengAlreadyTaken/paper">
          <div className="flex-1 px-6 py-6 mx-2 my-6 transition duration-150 delay-150 border-t border-gray-200 cursor-pointer my-4transition hover:border-gray-500 hover:bg-gray-50">
            <div className="flex justify-between">
              <dt className="text-2xl font-bold tracking-tight text-gray-900">
                📚 &nbsp;Comparative Study of Large Margin Nearest Neighbors
              </dt>
              <dt className="text-sm font-bold tracking-tight text-gray-400">
                Apr 2025
              </dt>
            </div>
            <dd className="mt-2 text-sm text-gray-500">
              This project delves into{" "}
              <b>Large Margin Nearest Neighbors (LMNN)</b>, a prominent{" "}
              <b>metric learning</b> algorithm designed to improve{" "}
              <b>k-Nearest Neighbor (kNN)</b> classification performance. The
              study investigates the original <b>LMNN</b> algorithm and{" "}
              <b>Feasibility-based LMNN (FB-LMNN)</b>, an efficiency-focused
              variant.
              <br />
              <br />A core component of this work involved developing and
              implementing several advanced LMNN variations, as publicly
              available code was limited to a single-pass version. The custom
              implementations include <b>multi-pass LMNN</b>,{" "}
              <b>kernel-based LMNN</b>, <b>dimension reduction LMNN</b>,{" "}
              <b>multi-metric LMNN</b>, and the <b>FB-LMNN</b> algorithm itself.
              <br />
              <br />
              The primary goal was a comprehensive comparative analysis,
              evaluating the classification performance and computational time
              taken by these developed LMNN variants. These were benchmarked
              against standard <b>kNN</b> (using Euclidean distance) and{" "}
              <b>Support Vector Machines (SVM)</b>.
              <br />
              <br />
              <b>FB-LMNN</b> was proposed to accelerate the LMNN optimization
              process by mathematically skipping infeasible target neighbors.
              Traditional LMNN considers all potential target neighbors, which
              can be computationally expensive. FB-LMNN intelligently identifies
              and bypasses neighbors that are unlikely to form useful triplets
              for learning the metric, leading to significant speed-ups in
              training time.{" "}
            </dd>
            <div className="flex mt-4">
              <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                Python
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                Metric Learning
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800">
                LMNN
              </span>
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-800">
                kNN
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-800">
                SVM
              </span>{" "}
            </div>
          </div>
        </Link>

        {/*<Link href="/xr">
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
          </Link>*/}

        <Link href="https://github.com/espisangijo/DelightAssistant">
          <div className="flex-1 px-6 py-6 mx-2 my-6 transition duration-150 delay-150 border-t border-gray-200 cursor-pointer my-4transition hover:border-gray-500 hover:bg-gray-50">
            <div className="flex justify-between">
              <dt className="text-2xl font-bold tracking-tight text-gray-900">
                🤖 &nbsp;Delight Voice SDK
              </dt>
              <dt className="text-sm font-bold tracking-tight text-gray-400">
                Sep 2021
              </dt>
            </div>
            <dd className="mt-2 text-sm text-gray-500">
              Delight is a platform for anyone to develop their own voice
              assistant. For developers who wants to integrate Delight Assistant
              into their app, it is now possible in just a few steps. Delight
              Voice SDK provides the UI, permissions handling, and Delight API
              so that developers can focus on the core functionalities of their
              app.
            </dd>
            <div className="flex mt-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                Kotlin
              </span>
            </div>
          </div>
        </Link>

        <Link href="https://github.com/espisangijo/square-app">
          <div className="flex-1 px-6 py-6 mx-2 my-6 transition duration-150 delay-150 border-t border-gray-200 cursor-pointer my-4transition hover:border-gray-500 hover:bg-gray-50">
            <div className="flex justify-between">
              <dt className="text-2xl font-bold tracking-tight text-gray-900">
                🎡 &nbsp;Square App
              </dt>
              <dt className="text-sm font-bold tracking-tight text-gray-400">
                Sep 2020
              </dt>
            </div>
            <dd className="mt-2 text-sm text-gray-500">
              Inspired by GoodNotes, this project aims to solve the problem in
              creating squares in the application. Looking like an image data,
              intuitively people will work on it using image processing
              techniques in the feature engineering stage. However, one of the
              most valuable data is not taken into account when processing using
              aforementioned technique - time. Time is essential in predicting
              whether a stroke results in a square or not. Square app is a data
              playground to add training data and perform predictions on square
              drawings.
            </dd>
            <div className="flex mt-4">
              <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Python
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                Javascript
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                React
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                Falcon
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                Docker
              </span>
              <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                SVM
              </span>
            </div>
          </div>
        </Link>

        <Link href="https://github.com/espisangijo/avocado">
          <div className="flex-1 px-6 py-6 mx-2 my-6 transition duration-150 delay-150 border-t border-gray-200 cursor-pointer hover:border-gray-500 hover:bg-gray-50">
            <div className="flex justify-between">
              <dt className="text-2xl font-bold tracking-tight text-gray-900">
                🥑 &nbsp;Avocado Analysis
              </dt>
              <dt className="text-sm font-bold tracking-tight text-gray-400">
                Jul 2020
              </dt>
            </div>
            <dd className="mt-2 text-sm text-gray-500">
              Avocados, like other types of fruit bearing trees, need ample
              water to thrive and produce fruit. Mature avocado trees need
              approximately 40 to 50 inches of rain per year. This project
              explores weather and geographic data to analyze different
              conditions affecting avocado plantations.
            </dd>
            <div className="flex mt-4">
              <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Python
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                Exploratory Data Analysis
              </span>
            </div>
          </div>
        </Link>

        <Link href="https://github.com/espisangijo/financial-news-analytics">
          <div className="flex-1 px-6 py-6 mx-2 my-6 transition duration-150 delay-150 border-t border-gray-200 cursor-pointer hover:border-gray-500 hover:bg-gray-50">
            <div className="flex justify-between">
              <dt className="text-2xl font-bold tracking-tight text-gray-900">
                📈 &nbsp;Financial News Analytics (PDF)
              </dt>
              <dt className="text-sm font-bold tracking-tight text-gray-400">
                Apr 2019
              </dt>
            </div>
            <dd className="mt-2 text-sm text-gray-500">
              Predicting price movements in the market with a combination of
              technical analysis and sentiment analysis on financial news.
            </dd>

            <div className="flex mt-4">
              <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Python
              </span>
              <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                LSTM
              </span>
            </div>
          </div>
        </Link>

        <Link href="https://github.com/espisangijo/coauthorship">
          <div className="flex-1 px-6 py-6 mx-2 my-6 transition duration-150 delay-150 border-t border-gray-200 cursor-pointer hover:border-gray-500 hover:bg-gray-50">
            <div className="flex justify-between">
              <dt className="text-2xl font-bold tracking-tight text-gray-900">
                🌐 &nbsp;Coauthorship Network Analysis
              </dt>
              <dt className="text-sm font-bold tracking-tight text-gray-400">
                Dec 2018
              </dt>
            </div>
            <dd className="mt-2 text-sm text-gray-500">
              A network of co-authors can be visualized with a graph of vertices
              and edges representing the authors and relationship with
              co-authors respectively. This project mapped out the relationships
              and presents unique point-of-view of the network attributes.
            </dd>

            <div className="flex mt-4">
              <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Python
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
                networkx
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Resume;
