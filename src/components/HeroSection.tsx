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
      <section className="relative h-[120dvh] md:h-dvh  lg:h-[135dvh] flex items-center justify-center overflow-hidden landingPage">
        <video
          autoPlay
          loop
          muted
          className="w-full h-[135dvh] object-cover absolute top-0 left-0 z-[-1] opacity-50 "
        >
          <source src="/public/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-[10%] lg:top-[25%] left-1/2 -translate-x-1/2 w-[95%] px-2 md:gap-15  h-[80dvh]  grid grid-cols-2 md:px-10 lg:grid-cols-[35%_28%_30%] ">
          <div className="relative ">
            <span className=" flex items-center gap-2 text-base md:text-2xl lg:text-3xl mb-2">
              <img
                src="https://cdn.prod.website-files.com/649ad960ebb0b801d480243a/649bda543db704aca2421dea_hand.svg"
                alt="hello hands"
              />{" "}
              Hi, My name is
            </span>
            <h1 className="text-[35px] md:text-6xl font-bold  mb-4">
              SAMJHANA ADHIKARI
            </h1>
            <div className=" absolute bottom-4 lg:bottom-13 right-16 ">
              <svg
                viewBox="0 0 300 300"
                className="animateSpin w-100px h-[100px] md:w-[150px] md:h-[150px]"
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
                  className="text-[33px] fill-primary"
                  style={{
                    textAnchor: "middle",
                  }}
                >
                  <textPath href="#circlePath" startOffset="50%">
                    Scroll Down &#x2022; Scroll Down &#x2022; Scroll Down
                    &#x2022;
                  </textPath>
                </text>
              </svg>
              <FaArrowDown className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-5xl" />
            </div>
          </div>
          <div className="w-full h-full text-lg md:text-xl lg:text-2xl mb-8 ">
            <img
              src="/samei.jpg"
              className="max-w-full min-h-full object-cover rounded-full "
            />
          </div>
          <div className="relative col-span-2 mt-6 md:mt-2 lg:col-span-1 w-full h-full flex flex-col gap-1 lg:gap-4 justify-end items-start text-lg md:text-xl font-poppins ">
            <img
              src="/arrowSign.svg"
              className="w-35 lg:w-fit absolute top-[20%] md:top-[21%] lg:top-[40%] left-[21%] md:left-[12%] lg:left-[32%] z-[-1]"
            />
            <span className="">I'm a passionate </span>
            <span className="text-[30px] lg:text-[52px] font-medium">
              Web Developer
            </span>
            <p className="text-justify">
              web developer specializing in creating dynamic and responsive
              websites. With a strong foundation in both front-end and back-end
              technologies, I strive to deliver seamless user experiences
              through clean and efficient code.
            </p>
            <span>
              Bringing together creativity and technical expertise to build
              exceptional digital experiences.
            </span>
            <div className="flex items-center gap-10 mt-8 lg:mt-4">
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
