import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [count, setCount] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount === 0 ? 6 : prevCount - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 pr-0">
      <nav className="font-sans px-2 py-2 flex flex-col md:flex-row md:justify-between">
        <div className="flex space-x-4 my-2 md:flex-row items-center md:my-0">
          <span className="text-2xl font-extrabold bg-black text-white px-4 py-2 rounded-full mb-2 md:mb-0 md:mr-4">B</span>
          <h1 className="font-bold text-2xl mb-2 md:mb-0">Project Dashboard</h1>
        </div>
        <div className="flex flex-row space-x-4 md:space-x-2 items-center flex-wrap  md:ml-20 ">
          <div></div>
          <div className="border-2 border-gray-300 px-4 rounded-lg text-gray-500 flex items-center py-3 space-x-1">
            <FontAwesomeIcon icon={faSearch}/>
            <input className="outline-none w-full md:w-80" type="text" placeholder="Search my storyboards" />
          </div>
          <div className="bg-blue-100 rounded-md flex items-center px-4 py-2 space-x-2 my-3 sm:my-0">
            <div className="relative">
              <div className="border-4 border-blue-200 border-t-blue-400 rounded-full animate-spin absolute top-0 left-0 w-full h-full"></div>
              <h2 className="px-2 py-1 text-[10px] relative z-10" aria-live="polite">{count}</h2>
              <span className="sr-only">Loading...</span>
            </div>
            <h2 className="font-bold text-center">Quick Start</h2>
          </div>
          <button className="border-2 border-black rounded-full w-10 h-10 bg-yellow-100 font-bold md:my-2">A</button>
          <span className="text-white bg-black w-10 h-10 rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faBolt} />
          </span>
        </div>
      </nav>
    </div>
  );
}
