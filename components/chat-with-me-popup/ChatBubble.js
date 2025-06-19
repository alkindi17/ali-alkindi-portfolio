"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ArrowRightIcon,
  XMarkIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const ChatBubble = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showChatButton, setShowChatButton] = useState(false);
  const pathname = usePathname();

  // Check if current page is home page
  const isHomePage = pathname === "/";

  useEffect(() => {
    // Show the chat bubble after 4 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setShowChatButton(true);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 animate-slideInUp">
          <div className="relative w-80 rounded-lg border border-gray-300 bg-white p-4 drop-shadow-lg dark:border-dark-accent dark:bg-dark-accent-200">
            <button
              onClick={handleDismiss}
              className="absolute right-2 top-2 rounded-full p-1 text-gray-400 transition-opacity hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-dark-accent dark:hover:text-gray-200"
              aria-label="Close chat bubble"
            >
              <XMarkIcon className="h-4 w-4" />
            </button>

            <div className="flex flex-col">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="https://chat.alialkindi.dev/ali-avatar.jpeg"
                    alt="Ali Al Kindi"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="flex items-center font-medium text-gray-900 dark:text-white">
                    Ali Al Kindi
                    <span className="ml-1.5 inline-flex items-center rounded bg-gray-200 px-2 py-0.5 text-xs font-bold text-gray-600  dark:bg-dark-accent-100 dark:text-gray-100">
                      AI
                    </span>
                  </p>
                  <p className="mt-1 text-sm leading-snug text-gray-600 dark:text-gray-300">
                    Hi there! 👋 <br />
                    Ask me about my projects and experience.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <Link
                  href="https://chat.alialkindi.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button m-0 inline-flex items-center rounded-full px-4 py-1.5"
                >
                  Ask me anything
                  <ArrowRightIcon className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {showChatButton && !isVisible && (
        <Link
          href="https://chat.alialkindi.dev"
          target="_blank"
          rel="noopener noreferrer"
          className={`secondary-button fixed right-6 z-50 m-0 flex h-12 w-12 items-center justify-center rounded-full p-0 shadow-lg hover:shadow-xl ${
            isHomePage ? "bottom-6 max-sm:bottom-14" : "bottom-6"
          }`}
          aria-label="Chat with Ali (AI)"
        >
          <ChatBubbleLeftRightIcon className="h-6 w-6" />
        </Link>
      )}
    </>
  );
};

export default ChatBubble;
