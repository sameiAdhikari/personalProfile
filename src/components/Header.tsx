import { useState } from "react";
function Header() {
  const [scrolledX, setScrolledX] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
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
  const handleNavLink = (link: { scrollTo: string }, i: number = 0) => {
    const elementTopPosition = document
      .querySelector(`.${link.scrollTo}`)
      ?.getBoundingClientRect().top;
    if (!elementTopPosition) return;
    const scrolledHeight = window.scrollY + elementTopPosition;
    window.scrollTo({ left: 0, top: scrolledHeight, behavior: "smooth" });
    setActiveTab(i);
  };
  return (
    <nav
      className={`fixed top-0 left-0 w-full h-20 shadow-md flex items-center justify-between text-xl px-10  z-50 ${
        scrolledX ? "bg-amber-50" : "bg-transparent"
      } transition-all duration-300 ease-in-out`}
    >
      <a href="*" className="text-4xl font-semibold text-primary">
        NISHANT
      </a>
      <ul className=" flex items-center gap-6 offset">
        {navLinks.map((link, i) => (
          <li key={link.label} className="cursor-pointer">
            <button
              // onClick={() => handleNavLink({ scrollTo: link.scrollTo, i })}
              onClick={() => handleNavLink(link, i)}
              className={`${
                activeTab === i ? "text-black underline" : "text-muted"
              } text-[20px] font-medium cursor-pointer capitalize transition-all duration-500 hover:text-black hover:underline`}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => handleNavLink({ scrollTo: "colaborationForm" })}
        className="bg-[#f0ce0f] px-7 py-[7px] rounded-full font-serif text-black border outline-none border-black hover:bg-transparent hover:text-black hover:border transition-all duration-300 cursor-pointer"
      >
        Let's Talk
      </button>
    </nav>
  );
}

export default Header;
