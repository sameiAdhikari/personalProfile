import {
  FaArrowDown,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <>
      <section className="w-full h-[135dvh] flex items-center justify-center overflow-hidden landingPage">
        <video
          // src="/public/video.mp4"
          autoPlay
          loop
          muted
          className="w-full h-[135dvh] object-cover absolute top-0 left-0 z-[-1] opacity-50 "
        >
          <source src="/public/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[95%] px-10 gap-15  h-[85dvh]  grid grid-cols-[35%_28%_30%] ">
          <div className="relative ">
            <span className=" flex items-center gap-2 text-xl md:text-2xl lg:text-3xl mb-2">
              <img
                src="https://cdn.prod.website-files.com/649ad960ebb0b801d480243a/649bda543db704aca2421dea_hand.svg"
                alt="hello hands"
              />{" "}
              Hi, My name is
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold  mb-4">
              Nishant Khadka
            </h1>
            <div className="absolute bottom-4 right-15">
              <svg
                width="200"
                height="200"
                viewBox="0 0 300 300"
                className="animateSpin "
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M150,150
            m-100,0
            a100,100 0 1,1 200,0
            a100,100 0 1,1 -200,0"
                    fill="none"
                  />
                </defs>

                <text
                  style={{
                    fontSize: "33",
                    fill: "#291953",
                    textAnchor: "middle",
                  }}
                >
                  <textPath href="#circlePath" startOffset="50%">
                    Scroll Down &#x2022; Scroll Down &#x2022; Scroll Down
                    &#x2022;
                  </textPath>
                </text>
              </svg>
              <FaArrowDown className="absolute left-1/2 top-1/2 -translate-1/2 text-5xl" />
            </div>
          </div>
          <div className="w-full h-full text-lg md:text-xl lg:text-2xl mb-8 ">
            <img
              src="/public/samei.jpg"
              className="max-w-full min-h-full object-cover rounded-full "
            />
          </div>
          <div className="relative w-full h-full flex flex-col gap-4 justify-end items-start text-xl font-poppins ">
            <img
              src="/public/arrowSign.svg"
              className="absolute top-[40%] left-[32%] z-[-1]"
            />
            <span className="">I'm a passionate </span>
            <span className="text-[52px] font-medium">Web Developer</span>
            <p className=" text-justify">
              web developer specializing in creating dynamic and responsive
              websites. With a strong foundation in both front-end and back-end
              technologies, I strive to deliver seamless user experiences
              through clean and efficient code.
            </p>
            <span>
              Bringing together creativity and technical expertise to build
              exceptional digital experiences.
            </span>
            <div className="flex items-center gap-10 mt-4">
              <Link
                to={"https://www.facebook.com/nishant.khadka.9237"}
                target="_blank"
              >
                <FaFacebookF className="text-3xl cursor-pointer hover:text-amber-400 transition-all duration-300" />
              </Link>
              <Link to={"https://x.com/home"} target="_blank">
                <FaTwitter className="text-3xl cursor-pointer hover:text-amber-400 transition-all duration-300" />
              </Link>
              <Link to={"https://www.linkedin.com/feed/"} target="_blank">
                <FaLinkedinIn className="text-3xl cursor-pointer hover:text-amber-400 transition-all duration-300" />
              </Link>
              <Link to={"https://www.instagram.com/"} target="_blank">
                <FaInstagram className="text-3xl cursor-pointer hover:text-amber-400 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
