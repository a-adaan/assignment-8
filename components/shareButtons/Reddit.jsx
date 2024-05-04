"use client";
import { useState } from "react";

import { RedditShareButton, RedditIcon } from "next-share";
export default function Reddit({ url }) {
  const [copied, setCopied] = useState(false);
  const copyTextToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
    }
  };
  return (
    <li className="flex items-center justify-center">
      <button
        onClick={copyTextToClipboard}
        className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <RedditShareButton
          url={"https://github.com/next-share"}
          title={
            "next-share is a social share buttons for your next React apps."
          }
        >
          <RedditIcon size={25} round />
        </RedditShareButton>
        <span className="ml-2">{copied ? "Link Copied" : "Reddit"}</span>
      </button>
    </li>
  );
}
