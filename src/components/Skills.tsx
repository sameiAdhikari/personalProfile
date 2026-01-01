import { FaArrowRightLong } from "react-icons/fa6";

function Skills() {
  const handleGetStartedButton = (ele: string) => {
    const el = document.querySelector(`.${ele}`)?.getBoundingClientRect().top;
    if (!el) return;
    const actualScroll = el + window.scrollY;
    window.scrollTo({ top: actualScroll, left: 0, behavior: "smooth" });
  };
  return (
    <section className="relative  px-4 py-5 lg:px-10 lg:py-20 skills">
      <img
        src="/arrowSign.svg"
        alt="background decoration"
        className="absolute top-10 lg:top-31 left-[38%] md:left-[41%] lg:left-[41%] object-cover w-[35%] md:w-[28%] lg:w-[25%] -z-1"
      />
      <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold md:mb-18 lg:mb-25 font-serif text-center">
        What i can do!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 place-items-center ">
        <div className="flex flex-col items-center justify-center gap-3 md:gap-0 lg:gap-3 rounded-xl px-4 py-8 md:px-10 md:py-15  transition-transform duration-300">
          <img
            src="/public/coding.svg"
            alt="coding image"
            className="p-2 lg:w-25 lg:h-25 md:mb-6 md:p-4 bg-amber-200 rounded-2xl"
          />
          <h3 className="text-xl lg:text-4xl font-semibold md:mb-4">
            Web Development
          </h3>
          <p className="text-gray-700 lg:text-lg text-center">
            Proficient in HTML, CSS, JavaScript, and modern frameworks like
            React and Next.js to build responsive and user-friendly websites.
          </p>
          <button
            onClick={() => handleGetStartedButton("colaborationForm")}
            className="flex items-center gap-5 px-8 py-2 hover:bg-amber-300 lg:text-2xl font-semibold rounded-full  hover:text-primary transition-all duration-300 cursor-pointer md:mt-4 w-fit"
          >
            Get Started
            <FaArrowRightLong />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 md:gap-0 lg:gap-3 rounded-xl px-4 py-8 md:px-10 md:py-15  transition-transform duration-300 bg-white">
          <img
            src="/public/coding-two.svg"
            alt="coding image"
            className="p-2 lg:w-25 lg:h-25 md:mb-6 md:p-4 bg-amber-300 rounded-2xl"
          />
          <h3 className="text-xl lg:text-4xl font-semibold md:mb-4">
            App Development
          </h3>
          <p className="text-gray-700 lg:text-lg text-center">
            Skilled in developing mobile applications using frameworks like
            React Native and Flutter, delivering seamless experiences across
            platforms.
          </p>
          <button
            onClick={() => handleGetStartedButton("colaborationForm")}
            className="flex items-center gap-5 px-4 py-1 lg:px-8 lg:py-2 bg-amber-300 lg:text-2xl font-semibold rounded-full border border-primary hover:bg-transparent hover:text-primary hover:border-primary transition-all duration-300 cursor-pointer mt-4  w-fit"
          >
            Get Started
            <FaArrowRightLong />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 md:gap-0 lg:gap-3 rounded-xl px-4 py-8 md:px-10 md:py-15  transition-transform duration-300">
          <img
            src="/public/design.svg"
            alt="coding image"
            className="p-2 lg:w-25 lg:h-25 md:mb-6 md:p-4 bg-amber-200 rounded-2xl"
          />
          <h3 className="text-xl lg:text-4xl font-semibold md:mb-4">
            Graphic Design
          </h3>
          <p className="text-gray-700 lg:text-lg text-center">
            Experienced in creating visually appealing designs using tools like
            Figma, Adobe Photoshop and Illustrator to enhance brand identity.
          </p>
          <button
            onClick={() => handleGetStartedButton("colaborationForm")}
            className="flex items-center gap-5 px-8 py-2 hover:bg-amber-300 lg:text-2xl font-semibold rounded-full  hover:text-primary transition-all duration-300 cursor-pointer md:mt-4 w-fit"
          >
            Get Started
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Skills;
