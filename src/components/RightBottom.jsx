import React from "react";

const RightBottom = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-8">Recommended  👇</h1>
      <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
        {/* <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src="https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207185.jpg"
              className="w-14 h-14 object-cover rounded-full"
              alt="img"
            />
            <div>
              <h3 className="font-bold">Thomas Martin</h3>
              <p className="text-gray-500">Updated 10m ago</p>
            </div>
          </div>
          <div>
            <span className="bg-primary-100 py-2 px-4 rounded-full text-white">
              Design
            </span>
          </div>
        </div>
        <div>
          <h5 className="text-lg font-bold">
            Need a designer to form branding essentials for my business.
          </h5>
          <p className="text-gray-500">
            Looking for a talented brand designer to create all the branding
            materials my new startup.
          </p>
        </div>
        <div className="bg-primary-100/10 flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4 rounded-lg">
          <div>
            <sup className="text-sm text-gray-500">&euro;</sup>{" "}
            <span className="text-2xl font-bold mr-2">8,700</span>
            <span className="text-sm text-gray-500">/ month</span>
          </div>
          <div>
            <span className="border border-primary-100 text-primary-100 py-2 px-4 rounded-full">
              Full time
            </span>
          </div>
        </div> */}
        {/* Card 1  */}
        <div class=" w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-serif">
              A complete roadmap to become a Frontend Devloper 
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Front-end development, or client-side development, involves building the User Interface (UI) of a website or a web application.....
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read Full Blog
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        {/* Card 2 */}
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <svg
            class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
              clip-rule="evenodd"
            ></path>
            <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
          </svg>
          <a href="#">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Most asked Interview Questions
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
           Attempt all the important questions asked in interviews
          </p>
          <a
            href="#"
            class="inline-flex items-center text-blue-600 hover:underline"
          >
            See  Questions
            <svg
              class="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default RightBottom;
