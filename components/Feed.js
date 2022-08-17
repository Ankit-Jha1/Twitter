import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "Gor",
      username: "codewithgor",
      UserImg:
        "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80",
      // image posted by user
      img: "https://images.unsplash.com/photo-1590692995294-564cea87a687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      text: "Hoo hoo",
      timestamp: "1 hours ago",
    },
    {
      id: "2",
      name: "illa",
      username: "codewithilla",
      UserImg:
        "https://images.unsplash.com/photo-1590692995294-564cea87a687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      // image posted by user
      img: "https://images.unsplash.com/photo-1541804536-78217d100fb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z29yaWxsYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      text: "Haa haa",
      timestamp: "1 day ago",
    },
  ];
  return (
    // Header -> Home on top with an icon
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      {/* Input component for user to tweet */}
      <Input />
      {/* Posts */}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
