import Link from "next/link";

export default function SidebarMenuItem({ text, Icon, active, redirectlink }) {
  return (
    <div className="hoverEffect flex items-center text-gray-700 justify-center xl:justify-start text-lg space-x-3">
      <Icon className="h-7" />
      {!redirectlink ? (
        <span className={`${active && "font-bold"} hidden xl:inline`}>
          {text}
        </span>
      ) : (
        <span className={`${active && "font-bold"} hidden xl:inline`}>
          <Link className="m-2 p-10" href={`${redirectlink}`}>
            {text}
          </Link>
        </span>
      )}
    </div>
  );
}
