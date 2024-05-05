"use client";
import { useState } from "react";
import Facebook from "./shareButtons/Facebook";
import Reddit from "./shareButtons/Reddit";
import Telegram from "./shareButtons/Telegram";
import Twitter from "./shareButtons/Twitter";

export default function ShareButton({ name }) {
  const url = `https://khanakhazana-adaan.netlify.app/details/${name.replace(
    /\s+/g,
    "_"
  )}`;
  const [show, setShow] = useState(false);
  function toggleShow() {
    setShow(!show);
  }

  console.log(show);
  return (
    <>
      <div
        className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]"
        onClick={toggleShow}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M8.7 10.7l6.6 -3.4" />
          <path d="M8.7 13.3l6.6 3.4" />
        </svg>
        <span>Share</span>
      </div>
      {/* dropdown */}
      {show ? (
        <div className="z-10 mt-8 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <Facebook url={url} />
            <Reddit url={url} />
            <Telegram url={url} />
            <Twitter url={url} />
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
