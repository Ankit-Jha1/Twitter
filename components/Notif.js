import { DotsHorizontalIcon } from "@heroicons/react/outline";
import React from "react";

export default function Notif({ post }) {
  return (
    <div className="p-3 bg-sky-100 border-b border-gray-400 cursor-pointer ">
      <div className="flex-1" >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h3 className="font-bold text-[15px] sm:text-[16px] hover:underline hover:cursor-pointer">
              {post.sourceName}
            </h3>
            <h4 className="pl-3">
                @{post.sourceName}
            </h4>
            {/* <span className="text-sm sm:text-[15px]">{post.text}</span> */}
            <span className="text-sm sm:text-[15px] hover:underline">{}</span>
          </div>
          <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2 " />
        </div>
      </div>
      <p className="p-2 text-gray-800 text-[15px sm:text-[16px] mb-2">
          {post.text}
        </p>
    </div>
  );
}
