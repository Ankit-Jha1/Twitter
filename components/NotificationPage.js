import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";
import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { BellIcon } from "@heroicons/react/outline";
import Notif from "./Notif";

export default function Feed() {
  const posts = [
    {
      id: 1,
      sourceName:"Twitter",
      text: "Welcome to the new Twitter",
    },
    {
      id: 2,
      sourceName:"Twitter",
      text: "You can read the latest trends in the explore section",
    },
    {
      id: 3,
      sourceName:"Twitter",
      text: `Enjoy the lastest news in my 'Whats Happening' section `,
    },
    {
      id: 4,
      sourceName:"Twitter",
      text: `Tweet, Like, Share and enjoy!!! `,
    },
  ];

  return (
    <>
      <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
          <h2 className="text-lg sm:text-xl font-bold cursor-pointer">
            Notifications
          </h2>
          <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
            <BellIcon className="h-7" />
          </div>
        </div>
      {posts.map((post) => (
        <Notif key={post.id} post={post} />
      ))}
      </div>
    </>
  );
}
