import React from "react";
import data from "../data/Question.json";
console.log(data);
const LeftBottom = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold mb-8 dark:text-white">
          Interview Questions
        </h1>
        <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8 dark:bg-slate-800">
          {data.map((e) => {
            return (
              <div className="flex xl:grid-cols-4 items-center justify-around gap-4 mb-4 drop-shadow-lg rounded-lg bg-zinc-100 h-28 hover:cursor-pointer hover:bg-zinc-200 dark:bg-gray-700 dark:hover:bg-gray-600">
                <div className="col-span-2 flex items-center  gap-4">
                  <h1 className="dark:text-white">Q{e.QNo}</h1>
                  <div>
                    <h3 className="font-bold dark:text-white ">{e.Question}</h3>
                    <p className="text-black hover:tracking-wide dark:text-white">
                      Solve Now
                    </p>
                  </div>
                </div>
                <div>
                  <span className="bg-gray-200 dark:text-gray-900 py-1 px-3 rounded-full font-medium">
                    {e.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default LeftBottom;
