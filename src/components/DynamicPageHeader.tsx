function DynamicPageHeader() {
  const scrolledX = true;
  return (
    <nav
      className={` w-full h-20 shadow-md flex items-center justify-between text-xl px-10  z-50 ${
        scrolledX ? "bg-amber-50" : "bg-transparent"
      } transition-all duration-300 ease-in-out`}
    >
      <a href="*" className="text-4xl font-semibold text-primary">
        NISHANT
      </a>
      {/* <ul className=" flex items-center gap-6 offset">
        {navLinks.map((link, i) => (
          <li
            key={link.label}
            className="cursor-pointer"
          >
            <button
              onClick={() => handleNavLink({ scrollTo: link.scrollTo, i })}
              className={`${
                activeTab === i ? "text-black underline" : "text-muted"
              } text-[20px] font-medium cursor-pointer capitalize transition-all duration-500 hover:text-black hover:underline`}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul> */}
      <button
        // onClick={() => handleNavLink({ scrollTo: "colaborationForm", i: 0 })}
        className="bg-[#f0ce0f] px-7 py-[7px] rounded-full font-serif text-black border outline-none border-black hover:bg-transparent hover:text-black hover:border transition-all duration-300 cursor-pointer"
      >
        Let's Talk
      </button>
    </nav>
  );
}

export default DynamicPageHeader;
