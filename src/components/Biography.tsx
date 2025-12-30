import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Biography() {
  return (
    <section className="px-4 py-8 grid grid-cols-1 gap-7 lg:px-10 lg:py-20 lg:grid-cols-[1fr_40%]  biography">
      <div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
          Biography
        </h2>
        <p className=" md:text-lg lg:text-2xl md:leading-relaxed text-justify text-muted">
          I am Nishant Khadka, a passionate web developer with a knack for
          creating dynamic and responsive web applications. With a strong
          foundation in a front-end technologies, I strive to deliver seamless
          user experiences through clean and efficient code.
        </p>
        <p className=" text-lg lg:text-2xl md:leading-relaxed mt-4 text-justify text-muted">
          Beyond coding, I am constantly exploring new technologies and trends
          in the ever-evolving world of web development. I believe in the power
          of collaboration and enjoy working in dynamic team environments to
          bring innovative projects to life. Let's connect and create something
          amazing together!
        </p>
        <div className="grid grid-cols-1 gap-10 md:gap-4 md:grid-cols-2 mt-7">
          <div className="flex flex-col items-center md:gap-3">
            <div className="border-b border-muted mb-2 md:pb-3 w-full">
              <label className="font-semibold text-lg md:text-xl lg:text-2xl">
                Name:
              </label>
              <span className="text-muted text-lg md:text-xl lg:text-2xl">
                {" "}
                Nishant Khadka
              </span>
            </div>
            <div className="border-b border-muted mb-2 md:pb-3 w-full">
              <label className="font-semibold text-lg md:text-xl lg:text-2xl">
                Email:
              </label>
              <span className="text-muted text-lg md:text-xl lg:text-2xl">
                {" "}
                khadkan73@gmail.com
              </span>
            </div>
            <div className="border-b border-muted mb-2 md:pb-3 w-full">
              <label className="font-semibold text-lg md:text-xl lg:text-2xl">
                Age:
              </label>
              <span className="text-muted text-lg md:text-xl lg:text-2xl">
                {" "}
                28 years
              </span>
            </div>
            <div className="border-b border-muted mb-2 md:pb-3 w-full">
              <label className="font-semibold text-lg md:text-xl lg:text-2xl">
                From:
              </label>
              <span className="text-muted text-lg md:text-xl lg:text-2xl">
                {" "}
                Gzira, Malta
              </span>
            </div>
            <div className="border-b border-muted mb-2 md:pb-3 w-full">
              <label className="font-semibold text-lg md:text-xl lg:text-2xl">
                Originally:
              </label>
              <span className="text-muted text-lg"> Jhapa, Nepal</span>
            </div>
            <div className="w-full float-start mt-6 md:mt-10">
              <Link
                to={"public/cv.pdf"}
                target="_blank"
                className="flex items-center gap-5 px-4 py-1 lg:px-8 lg:py-2 bg-amber-400 text-base lg:text-2xl font-semibold rounded-full border border-primary hover:bg-transparent hover:text-primary hover:border-primary transition-all duration-300 cursor-pointer md:mt-4 font-serif w-fit"
              >
                Download cv
                <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-1">
            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif">
                2
              </p>
              <span className="text-muted text-base md:text-lg lg:text-xl">
                Years Of Experience
              </span>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif">
                90+
              </p>
              <span className="text-muted text-base md:text-lg lg:text-xl">
                Projects Completed
              </span>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif">
                900+
              </p>
              <span className="text-muted text-base md:text-lg lg:text-xl">
                Happy Clients
              </span>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif">
                10
              </p>
              <span className="text-muted text-base md:text-lg lg:text-xl">
                Awards
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto">
        <img
          src="/public/sameiSari.jpg"
          className="md:h-[60dvh] md:w-[60dvh] lg:min-h-full lg:w-full
         object-cover rounded-2xl"
        />
      </div>
    </section>
  );
}

export default Biography;
