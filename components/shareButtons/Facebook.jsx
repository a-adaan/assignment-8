"use client";
import { useState } from "react";

import {
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";
export default function Facebook({ url }) {
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
        <FacebookShareButton
          url={"https://github.com/next-share"}
          quote={
            "next-share is a social share buttons for your next React apps."
          }
          hashtag={"#nextshare"}
        >
          <FacebookIcon size={25} round />
        </FacebookShareButton>
        <span className="ml-2">{copied ? "Link Copied" : "Facebook"}</span>
      </button>
    </li>
  );
}
