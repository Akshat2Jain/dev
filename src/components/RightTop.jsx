import React from "react";
import gold from "../assets/gold2.png";
import silver from "../assets/silver.png";
import bronze from "../assets/bronze.png";
const RightTop = () => {
  return (
    <>
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between dark:bg-slate-500">
        <h1 className="text-2xl font-bold mb-8 dark:text-white">Your Achievements 🤩</h1>
        <div className="bg-white p-8 rounded-xl shadow-2xl dark:bg-gray-800">
          <div className="flex items-center gap-4 mb-8">
            <img
              src={gold}
              className="w-14 h-14 object-cover rounded-full"
              alt="img"
            />
            <div>
              <h3 className="font-bold dark:text-white">Gold Badge</h3>
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
              <h3 className="font-bold dark:text-white">Silver Badge</h3>
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
              <h3 className="font-bold dark:text-white">Bronze Badge</h3>
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
export default RightTop;
