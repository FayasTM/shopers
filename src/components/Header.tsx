import { navBarList } from "@/constans";
import Container from "./Container";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { HiMenuAlt2 } from "react-icons/hi";



const Header = () => {
  return (
    <header className="w-full h-20 bg-accentWhite  border-b-[1px] border-b-lightText/50
    sticky z-50 top-0 left-0">
        <Container className="flex h-full items-center justify-between gap-4 lg:gap-10">
            <Logo />
            <SearchInput />
            <div className="hidden md:inline-flex items-center gap-7">
              {navBarList?.map((item) => (
                <Link key={item?.title} href={item?.link} className="navBarItem">
                  {item?.title}
                </Link>
              ))}

              <Link href={'/signin'} className="navBarItem">
                Sign in
              </Link>
              <Link href={'/studio'} className="navBarItem">
                Studio
              </Link>
            </div>
            <HiMenuAlt2 className="inline-flex md:hidden cursor-pointer text-3xl hoverEffect hover:text-darkOrange"/>  
        </Container>
    </header>
  )
}

export default Header