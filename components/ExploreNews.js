import { DotsHorizontalIcon } from "@heroicons/react/outline";

export default function News({ article }) {
  return (
    <div className="p-3">
      <div className="flex-1">
        {/* Header */}
        <div className="flex items-center justify-between">
          {/* user info */}
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              @{article.source.name}
            </h4>
            <span className="text-sm sm:text-[15px]">
              {/* @{post.data().username} */}
            </span>
            <span className="text-sm sm:text-[15px] hover:underline">
              {/* {post.timestamp} */}
              {/* <Moment fromNow>{post?.data()?.timestamp?.toDate()}</Moment> */}
            </span>
          </div>
          {/* dot icon */}
          <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2 " />
        </div>
        {/* post text */}
        <p className="text-gray-800 text-[15px sm:text-[16px] mb-2">
          {/* {post.data().text} */}
          {article.title}....
          <a
            rel="noreferrer"
            href={article.url}
            target="_blank"
            className="text-sky-500"
          >
            Link
          </a>
        </p>
        {/* post uploaded image */}
        <img
          className="rounded-2xl mr-2"
          src={article.urlToImage}
          alt="uploaded-img"
        />
      </div>
    </div>
  );
}
