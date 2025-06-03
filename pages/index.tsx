import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jacky Angara</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
        Jacky Angara
      </h1>
      <p className="mt-4 text-lg font-light text-gray-500">
        Hi, I am a{" "}
        <i className="p-1 font-mono text-sm text-red-400 bg-gray-100 rounded-md">
          Backend Engineer
        </i>{" "}
        @ <i className="font-medium text-blue-400">Mox Bank</i>.<br />
        Building innovative financial products and the tools that guarantee
        their performance and reliability through rigorous testing.
      </p>

      <div className="flex flex-col">
        <div className="flex justify-between mt-16 xs:flex-col">
          <Link href="/about">
            <div className="flex-1 px-3 py-4 mx-2 transition duration-150 delay-150 border-t border-gray-200 cursor-pointer hover:border-gray-500 hover:bg-gray-50">
              <dt className="font-medium text-gray-900">About</dt>
              <dd className="mt-2 text-sm text-gray-500">
                More information about myself
              </dd>
            </div>
          </Link>

          <Link href="/professional">
            <div className="flex-1 px-3 py-4 mx-2 transition duration-150 delay-150 border-t border-gray-200 cursor-pointer hover:border-gray-500 hover:bg-gray-50">
              <dt className="font-medium text-gray-900">Professional</dt>
              <dd className="mt-2 text-sm text-gray-500">
                My working experience
              </dd>
            </div>
          </Link>

          <Link href="/projects">
            <div className="flex-1 px-3 py-4 mx-2 transition duration-150 delay-150 border-t border-gray-200 cursor-pointer hover:border-gray-500 hover:bg-gray-50">
              <dt className="font-medium text-gray-900">Projects</dt>
              <dd className="mt-2 text-sm text-gray-500">
                Coding related things
              </dd>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
