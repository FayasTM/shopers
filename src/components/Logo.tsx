import Link from "next/link"
import { twMerge } from "tailwind-merge"



const logo = ({className}: {className?: string}) => {
  return (
    <Link href={"/"}>
        <h2 
        className={twMerge(
        "text-2xl text-accent hover:text-darkOrange font-bold uppercase hoverEffect relative group overflow-hidden",
        className
         )}
         >
            Shopers
            <span className="absolute left-0 w-full bottom-0 h-px bg-darkOrange -translate-x-[105%] group-hover:translate-x-0 transition-transform"/>
            </h2>
    </Link>
  )
}

export default logo