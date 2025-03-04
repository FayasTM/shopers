'use client'

import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const SearchInput = () => {
    const [search, setSearch] = useState("");
  return (
    <>
       <div className="w-full hidden md:inline-flex flex-1 h-12 relative">
        <CiSearch  className=" text-lg absolute left-2.5 mt-4 text-lightOrange"/>
        <input 
        type="text"
        placeholder="Search" 
        className="flex-1 h-full outline-none bg-transparent  placeholder-text-lightText border-[1px] border-accent/50 rounded-sm pl-8 pr-28" 
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        />

        {search && 
            (<IoMdClose onClick={() => setSearch("")}className="text-accent/50
            hover:text-lightRed hoverEffect cursor-pointer absolute right-20 top-4"/>)}
        
        <button className="absolute right-0 px-3.5 py-1.5 mr-1.5 text-sm hover:bg-darkOrange hoverEffect bg-lightOrange text-accentWhite font-mediam top-2">Search</button>
       </div>
    </>
  )
}

export default SearchInput