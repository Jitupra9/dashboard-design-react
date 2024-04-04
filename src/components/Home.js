import React, { useState } from "react";
import projectOneImage from "./images/project_one.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEllipsisVertical, faChevronDown, faPlus,faXmark,faToggleOff, faMessage } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  const [ isPopupOpen, setIsPopupOpen ] = useState(false);
  const [ inputValue, setInputValue ] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="bg-gray-100 px-3 sm:px-10 py-6 h-[90vh]">
      <div className="flex justify-between px-4">
        <div className="flex items-center space-x-3">
          <span className="px-3 py-1 border-2 border-black bg-orange-200 rounded-full text-black font-bold ">
            A
          </span>
          <h1 className="font-bold">Adam Coper Team</h1>
        </div>
        <button className="text-white bg-black px-3 py-1 rounded-md font-semibold" onClick={togglePopup}>
          New Project
        </button>
      </div>
      <div className="bg-white mt-8 py-10 px-4">
        <div className="flex justify-between px-5 pb-6">
          <div className="flex space-x-4 items-center">
            <FontAwesomeIcon icon={faFolder} className="text-xl" />
            <div className="">
              <h1 className="font-semibold">Default Project</h1>
              <p className="text-gray-300 text-sm font-semibold">
                1 storyboard
              </p>
            </div>
          </div>
          <div className="space-x-5">
            <FontAwesomeIcon icon={faEllipsisVertical} className="text-xl"/>
            <FontAwesomeIcon icon={faChevronDown} className="text-xl"/>
          </div>
        </div>
        <div className="px-7 flex flex-wrap md:space-x-7">
          <div></div>
          <div className="w-80 border-2 rounded-lg pb-5">
            <div className="images">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={projectOneImage}
                alt="Project One"
              />
            </div>
            <div className="px-3">
              <h1 className="font-semibold my-1">
                AI Charcter Demo Storyboard
              </h1>
              <p className="text-gray-400 text-[12px] font-semibold">
                Updated 19 Mar 24
              </p>
            </div>
          </div>
          <div
            className="h-56 w-80 my-5 bg-gray-100 text-gray-400 text-4xl flex justify-center items-center cursor-pointer"
            onClick={togglePopup}
          >
            <div className="border-2 w-20 h-20 rounded-full flex justify-center items-center">
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50">
          <div className=" relative bg-white p-8 rounded-lg shadow-md w-96">
            <div className="flex justify-between mb-5 items-center">
              <h1 className="text-2xl font-bold  ">New Storyboard</h1>
              <FontAwesomeIcon icon={faXmark}  onClick={togglePopup} className="text-xl cursor-pointer" />
            </div>
            <h2 className=" font-semibold">Storyboard Name</h2>
            <input
              className=" outline-none text-gray-900 border border-gray-600 px-5 py-2 my-2 rounded-sm w-[98%]"
              type="text"
              placeholder="e.g Default Project Storyboard"
              value={inputValue}
              onChange={handleInputChange}
            />
            <h2 className=" font-semibold">Frame Size</h2>
            <select className="outline-none text-black  font-semibold border border-gray-600 px-4 py-2 my-2 rounded-sm w-[98%] mb-5">
              <option>Landscape (16.9)</option>
              <option>X</option>
              <option>Y</option>
              <option>z</option>
            </select>
            <hr className=" absolute border border-gray w-[100%] -ml-8 " />
            <div className=" py-4 flex justify-between mt-3">
              <div className="flex  space-x-3 items-center">
                <FontAwesomeIcon icon={faToggleOff} className="text-2xl cursor-pointer "/>
                <h1 className="font-semibold">AI Assistan</h1>
              </div>
              <button className={`text-white px-3 py-1 rounded-md font-semibold ${inputValue ? 'bg-blue-500' : 'bg-gray-500'}`}>
                Create storyboard
              </button>
            </div>
          </div>
        </div>
      )}
      <div className=" flex justify-end  px-5 text-2xl text-white w-full">
        {" "}
        <div className="bg-black rounded-full w-12 h-12 flex justify-center items-center my-10 relative">
          <FontAwesomeIcon icon={faMessage} />
        </div>
      </div>
    </div>
  );
}
