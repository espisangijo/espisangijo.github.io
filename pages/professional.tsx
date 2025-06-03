import {
  faFaceKiss,
  faFaceSmile,
  faKiss,
  faKissBeam,
  faMicrophoneAlt,
  faMicroscope,
  faSearch,
  faStar,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Head from "next/head";
import Link from "next/link";

function Professional() {
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

      <Head>
        <title>Professional Experience</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
        Experience
      </h1>

      <div className="flex flex-col py-12">
        <div className="my-6">
          <h2 className="text-3xl font-light tracking-tight text-black">
            Mox Bank
          </h2>
          <h4 className="font-bold text-gray-400 uppercase text-md">
            Backend Engineer
          </h4>
          <ol className="relative m-12 border-l border-gray-200 dark:border-gray-700">
            <li className="mb-10 ml-12">
              <span className="absolute flex items-center justify-center w-6 h-6 p-4 bg-blue-100 text-blue-800 rounded-full -left-4 ring-1 ring-white dark:bg-blue-900 dark:ring-gray-900 dark:text-blue-300">
                🚀
              </span>
              <h3 className="mb-1 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                Financial Product Development & Lifecycle Management
              </h3>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Led the end-to-end design and development of innovative
                offerings like the FlexiBoost deposit product (enabling up to 6%
                interest), overseeing microservice collaboration and core
                banking integrations for seamless functionality and compliance.
              </p>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Translated stakeholder requirements into robust solutions for a
                range of financial products, and managed the maintenance and
                enhancement of existing systems including shared accounts,
                supplementary credit cards, and time deposit accounts to meet
                evolving business and customer needs.
              </p>
            </li>

            <li className="mb-10 ml-12">
              <span className="absolute flex items-center justify-center w-6 h-6 p-4 bg-green-100 text-green-800 rounded-full -left-4 ring-1 ring-white dark:bg-green-900 dark:ring-gray-900 dark:text-green-300">
                🚦
              </span>
              <h3 className="mb-1 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                Advanced Testing, System Reliability & Disaster Recovery
              </h3>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Spearheaded the development of a comprehensive load testing
                framework for a core banking engine, identifying undocumented
                behaviors and optimizing system performance. Ensured financial
                system integrity through rigorous regression and simulation
                testing using Cucumber BDD.
              </p>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Enhanced disaster recovery capabilities by designing and
                implementing a Kafka event replay tool for rapid failure
                identification and recovery.
              </p>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Automated API testing workflows using custom scripts and jq for
                robust validation of critical services.
              </p>
            </li>

            <li className="mb-10 ml-12">
              <span className="absolute flex items-center justify-center w-6 h-6 p-4 bg-yellow-100 text-yellow-800 rounded-full -left-4 ring-1 ring-white dark:bg-yellow-900 dark:ring-gray-900 dark:text-yellow-300">
                📊
              </span>
              <h3 className="mb-1 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                Data Engineering & Advanced Monitoring Solutions
              </h3>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Engineered a scalable transaction monitoring data pipeline using
                Apache Airflow, aggregating key metrics into Parquet files on
                Amazon S3 and materializing data into AWS Glue tables via SQL
                for downstream analytics. Collaborated with cross-functional
                teams on data reconciliation to ensure accuracy.
              </p>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Contributed to core banking monitoring services by designing and
                implementing data backfill processes from the core system.
              </p>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Created comprehensive Datadog dashboards for disaster recovery
                metrics, and utilized Datadog, Grafana, and Athena during
                biweekly drills to ensure high system reliability.
              </p>
            </li>

            <li className="mb-10 ml-12">
              {" "}
              {/* Adjust mb-0 if it's the last item overall in this section */}
              <span className="absolute flex items-center justify-center w-6 h-6 p-4 bg-purple-100 text-purple-800 rounded-full -left-4 ring-1 ring-white dark:bg-purple-900 dark:ring-gray-900 dark:text-purple-300">
                ⚙️
              </span>
              <h3 className="mb-1 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                CI/CD Pipeline Enhancements & DevOps Practices
              </h3>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Significantly improved CI/CD pipelines by integrating extensive
                validations, enhancing PR checks, and incorporating code
                coverage metrics, leading to higher code quality and more
                reliable deployments.
              </p>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Managed deployments of data infrastructure components, including
                AWS Glue tables and Airflow DAGs, utilizing CircleCI and
                Spinnaker, contributing to operational stability and efficient
                workflow orchestration.
              </p>
            </li>
          </ol>{" "}
        </div>

        <div className="my-6">
          <h2 className="text-3xl font-light tracking-tight text-black">
            Freelance
          </h2>

          <ol className="relative m-12 border-l border-gray-200">
            <li className="mb-10 ml-12">
              <span className="absolute flex items-center justify-center w-6 h-6 p-4 bg-gray-200 rounded-full -left-4 ring-1 ring-gray-200">
                ⚙
              </span>
              <h3 className="mb-1 text-lg font-semibold tracking-tight text-gray-900">
                Readability Analysis
              </h3>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Performed data mapping on firms’ specific engagement with
                policymakers using Perl to calculate readabillity score
              </p>
            </li>
            <li className="mb-10 ml-12">
              <span className="absolute flex items-center justify-center w-6 h-6 p-4 bg-gray-200 rounded-full -left-4 ring-1 ring-gray-200">
                ⚙
              </span>
              <h3 className="mb-1 text-lg font-semibold tracking-tight text-gray-900">
                Scrape SEC
              </h3>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Gathered Central Index Key (CIK) of all the companies listed in
                SEC and scraped all 10-K filings
              </p>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Processed the data and output an Excel (.xlsx) file
              </p>
            </li>
            <li className="mb-10 ml-12">
              <span className="absolute flex items-center justify-center w-6 h-6 p-4 bg-gray-200 rounded-full -left-4 ring-1 ring-gray-200">
                🎉
              </span>
              <h3 className="mb-1 text-lg font-light tracking-tight text-gray-900">
                First time freelancing 🎉🎉🎉
              </h3>
            </li>
          </ol>
        </div>

        <div className="my-6">
          <h2 className="text-3xl font-light tracking-tight text-black">
            Delight Labs
          </h2>
          <h4 className="font-bold text-gray-400 uppercase text-md">
            Software Engineer
          </h4>

          <ol className="relative m-12 border-l border-gray-200">
            <li className="mb-10 ml-12">
              <span className="absolute flex items-center justify-center w-6 h-6 p-4 bg-gray-200 rounded-full -left-4 ring-1 ring-gray-200">
                ⚙
              </span>
              <h3 className="mb-1 text-lg font-semibold tracking-tight text-gray-900">
                Search Engine
              </h3>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Developed an end-to-end micro search engine consisting of a web
                crawler, persistent storage, change data capture (CDC), text
                embedding server and indexer.
              </p>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Linked persistent storage to the indexer using Debezium (on top
                of Apache Kafka)
              </p>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Developed an admin tool for managing Elasticsearch indices
              </p>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Customized Elasticsearch&lsquo;s user authentication for
                internal admin tool
              </p>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Performed integration and end-to-end testing using test servers
                for Elasticsearch.
              </p>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Designed chatbot using Rasa NLU to communicate with our Search
                API of the search engine.
              </p>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Integrated a WebXR client to the chatbot and search engine for
                teleportation between XR worlds.
              </p>
            </li>
            <li className="mb-10 ml-12">
              <span className="absolute flex items-center justify-center w-6 h-6 p-4 bg-gray-200 rounded-full -left-4 ring-1 ring-gray-200">
                🔬
              </span>
              <h3 className="mb-1 text-lg font-semibold tracking-tight text-gray-900">
                Tech Research
              </h3>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Developed a Unity application for a VR store for testing
                purposes.
              </p>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Researched on information retrieval method and design
              </p>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Researched blockchain technologies and existing blockchain
                projects. Developed smart contracts on Ethereum testnets
              </p>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Researched and developed mobile multi-platform technologies in
                an experiment for a multi-platform SDK.
              </p>
            </li>
            <li className="mb-10 ml-12">
              <span className="absolute flex items-center justify-center w-6 h-6 p-4 bg-gray-200 rounded-full -left-4 ring-1 ring-gray-200">
                🤖
              </span>
              <h3 className="mb-1 text-lg font-semibold tracking-tight text-gray-900">
                Voice Assistant
              </h3>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Developed an Android module which allow others to integrate
                voice capabilities into their app.
              </p>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Developed adapters using webhooks for multiple messenger APIs to
                interact with.
              </p>
            </li>

            <li className="mb-10 ml-12">
              <span className="absolute flex items-center justify-center w-6 h-6 p-4 bg-gray-200 rounded-full -left-4 ring-1 ring-gray-200">
                🎉
              </span>
              <h3 className="mb-1 text-lg font-light tracking-tight text-gray-900">
                {" "}
                Second job 🎉🎉🎉
              </h3>
            </li>
          </ol>
        </div>
        <div className="my-6">
          <h2 className="text-3xl font-light tracking-tight text-black">
            Shopee
          </h2>
          <h4 className="font-bold text-gray-400 uppercase text-md">
            Associate Data Scientist
          </h4>

          <ol className="relative m-12 border-l border-gray-200 ">
            <li className="mb-10 ml-12">
              <span className="absolute flex items-center justify-center w-6 h-6 p-4 bg-gray-200 rounded-full -left-4 ring-1 ring-gray-200">
                ⛏
              </span>
              <h3 className="mb-1 text-lg font-semibold tracking-tight text-gray-900">
                Internal Preprocessing Tool
              </h3>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Performed unit testing and load testing on APIs before entering
                the UAT and production stage.
              </p>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Developed and deployed APIs using the Falcon web framework which
                consistently performs well on high loads.
              </p>
            </li>
            <li className="mb-10 ml-12">
              <span className="absolute flex items-center justify-center w-6 h-6 p-4 bg-gray-200 rounded-full -left-4 ring-1 ring-gray-200">
                👾
              </span>
              <h3 className="mb-1 text-lg font-semibold tracking-tight text-gray-900">
                Post-mortem Chatbot Analysis
              </h3>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Performed data clustering on noisy text data to assist in a
                slot-filling task.
              </p>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Analyzed the multi-dimensional data to find the optimum amount
                of clusters using mathematical methods.
              </p>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Implemented active learning to overcome the problem faced by
                both unsupervised and supervised learning.
              </p>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Experimented on different word/sentence embeddings (e.g. BERT
                embedding, fastText embedding, word2vec, GloVe, TF-IDF) to
                compare the strengths and weaknesses in different NLP tasks.
              </p>
            </li>
            <li className="mb-10 ml-12">
              <span className="absolute flex items-center justify-center w-6 h-6 p-4 bg-gray-200 rounded-full -left-4 ring-1 ring-gray-200">
                🤗
              </span>
              <h3 className="mb-1 text-lg font-semibold tracking-tight text-gray-900">
                Customer Service Sentiment Analysis
              </h3>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Fine-tuned a pre-trained model (BERT) to perform sentiment
                analysis on noisy structured data
              </p>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Performed sentiment analysis on South East Asian languages.
              </p>
              <p className="my-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Preprocess email data into a chat-like structure
              </p>
            </li>
            <li className="mb-10 ml-12">
              <span className="absolute flex items-center justify-center w-6 h-6 p-4 bg-gray-200 rounded-full -left-4 ring-1 ring-gray-200">
                🎉
              </span>
              <h3 className="mb-1 text-lg font-light tracking-tight text-gray-900">
                First job 🎉🎉🎉
              </h3>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Professional;
