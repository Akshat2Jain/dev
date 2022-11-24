import React from "react";
import { RiLineChartLine, RiHashtag } from "react-icons/ri";
import gold from "../assets/gold2.png";
import silver from "../assets/silver.png";
import bronze from "../assets/bronze.png"

const TopUser = () => {
  return (
    <>
      <div className="bg-primary-100 p-8 rounded-xl text-gray-300 flex flex-col gap-6">
        <RiLineChartLine className="text-5xl" />
        <h4 className="text-2xl">Your Current Streak</h4>
        <span className="text-5xl text-white">10 Days</span>
        <span className="py-1 px-3 bg-primary-300/80 rounded-full">
          + 10% since last month
        </span>
      </div>
      {/* Card 2 */}
      <div className="p-4 bg-white rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl">
        <div className="flex items-center gap-4 bg-primary-100/10 rounded-xl p-4">
          <span className="bg-primary-100 text-gray-300 text-2xl font-bold p-4 rounded-xl">
            40
          </span>
          <div>
            <h3 className="font-bold">Questions Solved</h3>
            <p className="text-gray-500">Till Now</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-red-300 rounded-xl p-4">
          <span className="bg-red-500 text-red-300 text-2xl font-bold p-4 rounded-xl">
            10
          </span>
          <div>
            <h3 className="font-bold"> Hard Questions Solved</h3>
            <p className="text-gray-500">Till Now</p>
          </div>
        </div>
        {/* <div className="bg-primary-100/10 rounded-xl p-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-primary-100 text-gray-300 text-2xl font-bold p-4 rounded-xl">
              10
            </span>
            <div>
              <h3 className="font-bold">Projects</h3>
              <p className="text-gray-500">8 this month</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="bg-primary-100/20 py-1 px-4 rounded-full">
              Mobile app
            </span>
            <span className="bg-primary-100/20 py-1 px-4 rounded-full">
              Branding
            </span>
          </div>
        </div> */}
        <div className="flex items-center gap-4 bg-green-100 rounded-xl p-4">
          <span className="bg-green-500 text-green-300 text-2xl font-bold p-4 rounded-xl">
            30
          </span>
          <div>
            <h3 className="font-bold"> Easy Questions Solved</h3>
            <p className="text-gray-500">Till Now</p>
          </div>
        </div>
      </div>

      {/* Right Upper side  */}
      <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
        <h1 className="text-2xl font-bold mb-8">Your Achievements 🤩</h1>
        <div className="bg-white p-8 rounded-xl shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <img
              src={gold}
              className="w-14 h-14 object-cover rounded-full"
              alt="img"
            />
            <div>
              <h3 className="font-bold">Gold Badge</h3>
              <p className="text-gray-500">
                For completing this much of questions
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={silver}
              className="w-14 h-14 object-cover rounded-full"
              alt="img"
            />
            <div>
              <h3 className="font-bold">Silver Badge</h3>
              <p className="text-gray-500">
                For completing this much of questions
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={bronze}
              className="w-14 h-14 object-cover rounded-full"
              alt="img"
            />
            <div>
              <h3 className="font-bold">Bronze Badge</h3>
              <p className="text-gray-500">
                For completing this much of questions
              </p>
            </div>
          </div>
          
          <div className="flex justify-end">
            <a
              href="#"
              className="hover:text-primary-100 transition-colors hover:underline"
            >
              See all Achievements
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopUser;
