import { HashtagIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import ExploreNews from "./ExploreNews";
import Input from "./Input";
import News from "./News";

export default function Explore({ techNews }) {
  // the number of articles to show in news section
  const [articleNum, setArticleNum] = useState(3);
  // {/* // Header -> Home on top with an icon */}
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">
          Explore🔥
        </h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <HashtagIcon className="h-7" />
        </div>
      </div>
      {/* Input component for user to tweet */}
      {/* <Input /> */}

      {/* firePosts */}
      {/* {
    fireposts.map( (firepost)=>(
      <Post key={firepost.id} post={firepost} />
    ))
    } */}

      {/* <Post key={dummy.id} post={dummy} /> */}

      {/* Posts */}
      {/* {posts.map((post) => (
      <Post key={post.id} post={post} />
    ))} */}

      {techNews.map((article) => (
        <ExploreNews key={article.title} article={article} />
      ))}
      <button
        onClick={() => setArticleNum(articleNum + 3)}
        className="text-blue-300 pl-4 pb-3 hover:text-blue-400"
      >
        Show more
      </button>
    </div>
  );
}
