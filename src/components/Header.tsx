import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
function Header() {
  const [scrolledX, setScrolledX] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const pathName = useLocation();
  const navLinks = [
    { label: "home", scrollTo: "landingPage" },
    { label: "about me", scrollTo: "biography" },
    { label: "work", scrollTo: "skills" },
    { label: "experience", scrollTo: "experience" },
  ];

  // useEffect(() => {
  //   if ("scrollRestoration" in window.history) {
  //     window.history.scrollRestoration = "manual";
  //   }
  //   const refresh =
  //     (
  //       performance.getEntriesByType(
  //         "navigation"
  //       )[0] as PerformanceNavigationTiming
  //     ).type === "reload";
  //   if (refresh) window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, [pathName]);

  // const handleNavLink = ({ scrollTo, i }: { scrollTo: string; i: number }) => {
  //   setActiveTab(i);
  //   const pageToScroll = document
  //     .querySelector(`.${scrollTo}`)
  //     ?.getBoundingClientRect().top;

  //   function smoothScrollTo(targetY: number, duration = 1500) {
  //     const startY = window.scrollY;
  //     const difference = targetY - startY;
  //     const startTime = performance.now();

  //     function animate(time: number) {
  //       const elapsed = time - startTime;
  //       const progress = Math.min(elapsed / duration, 1);

  //       // Ease function (easeInOutQuad)
  //       const ease =
  //         progress < 0.5
  //           ? 2 * progress * progress
  //           : 1 - Math.pow(-2 * progress + 2, 2) / 2;

  //       window.scrollTo(0, startY + difference * ease);

  //       if (progress < 1) requestAnimationFrame(animate);
  //     }

  //     requestAnimationFrame(animate);
  //   }

  //   //-------------- with custome scrolling behaviour----------------
  //   smoothScrollTo(Number(pageToScroll), 1000); // 2 seconds super smooth scroll
  //   // --------------------with built in scrolling bahaviour----------------
  //   // window.scrollTo({ left: 0, top: Number(pageToScroll), behavior: "smooth" });
  // };
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) return setScrolledX(true);
    setScrolledX(false);
  });
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleNavLink = (link: { scrollTo: string }, i: number = 0) => {
    const elementTopPosition = document
      .querySelector(`.${link.scrollTo}`)
      ?.getBoundingClientRect().top;
    if (!elementTopPosition) return;
    const scrolledHeight = window.scrollY + elementTopPosition;
    window.scrollTo({ left: 0, top: scrolledHeight, behavior: "smooth" });
    setActiveTab(i);
    toggleMenu();
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-screen h-16 lg:h-20  flex items-center justify-between  lg:text-xl px-2 md:px-10  z-50 ${
          scrolledX ? "bg-amber-50" : "bg-transparent"
        } transition-all duration-300 ease-in-out`}
      >
        <a href="/" className="text-xl lg:text-4xl font-semibold text-primary">
          SAMEI
        </a>
        <ul className="hidden md:flex items-center gap-6 flex-row bg-transparent ">
          {navLinks.map((link, i) => (
            <li key={link.label} className="cursor-pointer">
              <button
                // onClick={() => handleNavLink({ scrollTo: link.scrollTo, i })}
                onClick={() => handleNavLink(link, i)}
                className={`${
                  activeTab === i ? " font-medium underline" : ""
                } text-base lg:text-2xl text-black cursor-pointer capitalize transition-all duration-500  hover:underline`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex  gap-2">
          <button
            onClick={() => handleNavLink({ scrollTo: "colaborationForm" })}
            className="bg-[#f0ce0f] text-sm lg:text-xl px-3 md:px-4 py-px md:py-1 lg:px-7  rounded-full font-serif text-black border outline-none border-black hover:bg-transparent hover:text-black hover:border transition-all duration-300 cursor-pointer"
          >
            Let's Talk
          </button>
          <TiThMenu className="text-3xl md:hidden" onClick={toggleMenu} />
        </div>
      </nav>
      <div
        className={`${
          isMenuOpen ? "fixed" : "hidden"
        } top-0 right-0 w-40 p-5 h-60 rounded-2xl rounded-tr-none m-1 bg-white cursor-pointer md:hidden z-50`}
      >
        <IoClose
          className="absolute top-2 right-2 text-3xl "
          onClick={toggleMenu}
        />
        <ul className="flex flex-col gap-3 ">
          {navLinks.map((link, i) => (
            <li key={link.label} className="cursor-pointer">
              <button
                // onClick={() => handleNavLink({ scrollTo: link.scrollTo, i })}
                onClick={() => handleNavLink(link, i)}
                className={`${
                  activeTab === i ? " font-medium underline" : ""
                } text-base lg:text-2xl text-black cursor-pointer capitalize transition-all duration-500  hover:underline`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Header;
