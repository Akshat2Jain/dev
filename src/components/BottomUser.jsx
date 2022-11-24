import React from "react";
import { RiLineChartLine, RiHashtag } from "react-icons/ri";
import RightBottom from "../components/RightBottom";

const BottomUser = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold mb-8">Interview Questions</h1>
        <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
          {/* Card 1 */}
          <div className="flex xl:grid-cols-4 items-center justify-around gap-4 mb-4 drop-shadow-lg rounded-lg bg-zinc-100 h-28 hover:cursor-pointer hover:bg-zinc-200">
            <div className="col-span-2 flex items-center  gap-4">
              <h1>Q1</h1>
              <div>
                <h3 className="font-bold ">
                  How can you create an Array in JavaScript?
                </h3>
                <p className="text-black hover:tracking-wide">Solve Now</p>
              </div>
            </div>
            <div>
              <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">
                Easy
              </span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex xl:grid-cols-4 items-center justify-around gap-4 mb-4 drop-shadow-lg rounded-lg bg-zinc-100 h-28 hover:cursor-pointer hover:bg-zinc-200">
            <div className="col-span-2 flex items-center  gap-4">
              <h1>Q2</h1>
              <div>
                <h3 className="font-bold ">
                  Explain what is Hoisting in Javascript?
                </h3>
                <p className="text-black hover:tracking-wide">Solve Now</p>
              </div>
            </div>
            <div>
              <span className="bg-red-100 text-red-800 py-1 px-3 rounded-full font-medium">
                Hard
              </span>
            </div>
          </div>
          {/* Card -3 */}
          <div className="flex xl:grid-cols-4 items-center justify-around gap-4 mb-4 drop-shadow-lg rounded-lg bg-zinc-100 h-28 hover:cursor-pointer hover:bg-zinc-200">
            <div className="col-span-2 flex items-center  gap-4">
              <h1>Q2</h1>
              <div>
                <h3 className="font-bold ">Why do we need Promises?</h3>
                <p className="text-black hover:tracking-wide">Solve Now</p>
              </div>
            </div>
            <div>
              <span className="bg-yellow-100 text-yellow-800 py-1 px-3 rounded-full font-medium">
                Medium
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Right bottom side */}
        <RightBottom />
      </div>
    </>
  );
};

export default BottomUser;
