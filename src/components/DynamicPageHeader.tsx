import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";

function DynamicPageHeader() {
  const scrolledX = true;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    // <nav
    //   className={` w-full h-20  flex items-center justify-between text-xl px-10  z-50 ${
    //     scrolledX ? "bg-transparent" : "bg-transparent"
    //   } transition-all duration-300 ease-in-out`}
    // >
    //   <Link to="/" className="text-4xl font-semibold text-primary">
    //     NISHANT
    //   </Link>
    //   <div className="flex items-center gap-10 text-xl">
    //     <Link to={"/"} className="hover:underline">
    //       Home
    //     </Link>
    //     <Link to={"/work/dynamicwork"} className="hover:underline">
    //       Work
    //     </Link>
    //     <Link to={"/work/blog"} className="hover:underline">
    //       Blog
    //     </Link>
    //   </div>

    //   <Link
    //     to={"/"}
    //     // onClick={() => handleNavLink({ scrollTo: "colaborationForm", i: 0 })}
    //     className="bg-[#f0ce0f] px-7 py-[7px] rounded-full font-serif text-black border outline-none border-black hover:bg-transparent hover:text-black hover:border transition-all duration-300 cursor-pointer"
    //   >
    //     Let's Talk
    //   </Link>
    // </nav>
    <nav
      className={`fixed top-0 left-0 w-screen h-16 lg:h-20  flex items-center justify-between  lg:text-xl px-2 md:px-10  z-50 ${
        scrolledX ? "bg-amber-50" : "bg-transparent"
      } transition-all duration-300 ease-in-out`}
    >
      <a href="/" className="text-xl lg:text-4xl font-semibold text-primary">
        NISHANT
      </a>
      <div className="hidden md:flex items-center gap-10 text-xl">
        <Link to={"/"} className="hover:underline">
          Home
        </Link>
        <Link to={"/work/dynamicwork"} className="hover:underline">
          Work
        </Link>
        <Link to={"/work/blog"} className="hover:underline">
          Blog
        </Link>
      </div>
      <div className="flex  gap-2">
        <button
          // onClick={() => handleNavLink({ scrollTo: "colaborationForm" })}
          className="bg-[#f0ce0f] text-sm lg:text-xl px-3 md:px-4 py-px md:py-1 lg:px-7  rounded-full font-serif text-black border outline-none border-black hover:bg-transparent hover:text-black hover:border transition-all duration-300 cursor-pointer"
        >
          Let's Talk
        </button>
        <TiThMenu className="text-3xl md:hidden" onClick={toggleMenu} />
        <div
          className={`fixed top-0 right-0 flex flex-col items-center gap-5 text-xl bg-white w-40 p-5 h-50 rounded-2xl rounded-tr-none m-1 z-50 cursor-pointer md:hidden ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <IoClose
            className="absolute top-2 right-2 text-3xl "
            onClick={toggleMenu}
          />
          <Link to={"/"} className="hover:underline">
            Home
          </Link>
          <Link to={"/work/dynamicwork"} className="hover:underline">
            Work
          </Link>
          <Link to={"/work/blog"} className="hover:underline">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default DynamicPageHeader;
