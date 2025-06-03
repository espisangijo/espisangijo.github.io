import React from "react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function About() {
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
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="my-8 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
        About
      </h1>
      <div className="bg-white dark:bg-gray-900 py-12 sm:py-16">
        {" "}
        {/* Optional: Add a background color for the section */}
        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            Hey there! I&apos;m currently diving deep into the world of data as
            a Master&apos;s student in Data Science. I&apos;ve discovered a real
            passion for this field, especially for statistics – I genuinely find
            unraveling patterns and insights from data quite fun ! 🤓
          </p>

          <p>
            This enthusiasm for data naturally extends to my keen interest in
            the financial world. I&apos;m fascinated by everything from the
            dynamics of trading and the intricate mathematics behind finance to
            the systematic approaches of quantitative analysis . Lately,
            I&apos;ve been particularly captivated by the potential of
            cutting-edge technologies like agentic LLMs and how they can
            revolutionize financial strategies and decision-making. 📈🤖
          </p>

          <p>
            Beyond finance, I&apos;m a big fan of &quot;cool stuff&quot; in tech
            that pushes boundaries. XR glasses and similar immersive
            technologies excite me, especially when considering the AI
            integration possibilities. I believe these advancements can unlock
            incredible human capabilities and, importantly, play a significant
            role in helping people with disabilities navigate and interact with
            the world more effectively. It&apos;s this potential for technology
            to create meaningful, positive impact that truly inspires me. ✨
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
