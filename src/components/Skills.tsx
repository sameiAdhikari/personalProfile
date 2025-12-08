import { FaArrowRightLong } from "react-icons/fa6";

function Skills() {
  const handleGetStartedButton = (ele: string) => {
    const el = document.querySelector(`.${ele}`)?.getBoundingClientRect().top;
    if (!el) return;
    const actualScroll = el + window.scrollY;
    window.scrollTo({ top: actualScroll, left: 0, behavior: "smooth" });
  };
  return (
    <section className="relative min-h-screen px-20 py-20 skills">
      <img
        src="/public/arrowSign.svg"
        alt="background decoration"
        className="absolute top-36 left-[40%] object-cover w-[25%] -z-1"
      />
      <h2 className="text-6xl font-bold mb-25 font-serif text-center">
        What i can do!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl  px-10 py-15  transition-transform duration-300">
          <img
            src="/public/coding.svg"
            alt="coding image"
            className="w-25 h-25 mb-6 p-4 bg-amber-200 rounded-2xl"
          />
          <h3 className="text-4xl font-semibold mb-4">Web Development</h3>
          <p className="text-gray-700 text-lg text-center">
            Proficient in HTML, CSS, JavaScript, and modern frameworks like
            React and Next.js to build responsive and user-friendly websites.
          </p>
          <button
            onClick={() => handleGetStartedButton("colaborationForm")}
            className="flex items-center gap-5 px-8 py-2 hover:bg-amber-300 text-2xl font-semibold rounded-full  hover:text-primary transition-all duration-300 cursor-pointer mt-4  w-fit"
          >
            Get Started
            <FaArrowRightLong />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 bg-white rounded-xl shadow-lg px-10 py-15  transition-transform duration-300">
          <img
            src="/public/coding-two.svg"
            alt="coding image"
            className="w-25 h-25 mb-6 p-4 bg-amber-300 rounded-2xl"
          />
          <h3 className="text-4xl font-semibold mb-4">App Development</h3>
          <p className="text-gray-700 text-lg text-center">
            Skilled in developing mobile applications using frameworks like
            React Native and Flutter, delivering seamless experiences across
            platforms.
          </p>
          <button
            onClick={() => handleGetStartedButton("colaborationForm")}
            className="flex items-center gap-5 px-8 py-2 bg-amber-300 text-2xl font-semibold rounded-full border border-primary hover:bg-transparent hover:text-primary hover:border-primary transition-all duration-300 cursor-pointer mt-4  w-fit"
          >
            Get Started
            <FaArrowRightLong />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl  px-10 py-15  transition-transform duration-300">
          <img
            src="/public/design.svg"
            alt="coding image"
            className="w-25 h-25 mb-6 p-4 bg-amber-200 rounded-2xl"
          />
          <h3 className="text-4xl font-semibold mb-4">Graphic Design</h3>
          <p className="text-gray-700 text-lg text-center">
            Experienced in creating visually appealing designs using tools like
            Figma, Adobe Photoshop and Illustrator to enhance brand identity.
          </p>
          <button
            onClick={() => handleGetStartedButton("colaborationForm")}
            className="flex items-center gap-5 px-8 py-2 hover:bg-amber-300 text-2xl font-semibold rounded-full  hover:text-primary transition-all duration-300 cursor-pointer mt-4  w-fit"
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
