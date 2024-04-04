import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <div className=" bg-orange-100 font-bold space-x-5 px-2 py-2">
      <div className="flex space-x-4 items-center flex-col md:flex-row">
        <div className=" flex space-x-2 py-1 justify-center items-center bg-orange-300 bg-opacity-65 px-4 rounded-2xl">
        <FontAwesomeIcon icon={faClock} />
          <h3 className=" ">One-Time Offer</h3>
        </div>
        
        <p className=" text-[13px] my-4 md:my-0">
          {" "}
          Your AI Storyboarding Bundle Discount expires in{" "}
          <span className=" bg-pink-100 px-2  text-pink-300">5:01</span>
        </p>
        <button className="font-bold px-4 py-2 text-sm bg-pink-300 bg-opacity-65 rounded-lg">
          Claim Discount
        </button>
      </div>
    </div>
  );
}
