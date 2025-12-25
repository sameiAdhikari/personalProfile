import { Link } from "react-router-dom";

function DynamicPageHeader() {
  const scrolledX = true;
  return (
    <nav
      className={` w-full h-20  flex items-center justify-between text-xl px-10  z-50 ${
        scrolledX ? "bg-transparent" : "bg-transparent"
      } transition-all duration-300 ease-in-out`}
    >
      <Link to="/" className="text-4xl font-semibold text-primary">
        NISHANT
      </Link>
      <div className="flex items-center gap-10 text-xl">
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

      <Link
        to={"/"}
        // onClick={() => handleNavLink({ scrollTo: "colaborationForm", i: 0 })}
        className="bg-[#f0ce0f] px-7 py-[7px] rounded-full font-serif text-black border outline-none border-black hover:bg-transparent hover:text-black hover:border transition-all duration-300 cursor-pointer"
      >
        Let's Talk
      </Link>
    </nav>
  );
}

export default DynamicPageHeader;
