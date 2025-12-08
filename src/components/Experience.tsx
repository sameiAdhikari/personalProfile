import { useState } from "react";

function Experience() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const handleMouseEnter = (number: number) => {
    setHoveredItem(number);
  };
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <section className="relative max-w-screen min-h-screen  px-20 py-10 experience">
      <h1 className="text-5xl font-bold mb-15 ">My Work Experience</h1>
      <div role="lists" className="grid grid-cols-3  gap-7 cursor-pointer">
        <div
          role="lsitItem"
          className="relative w-full h-[95dvh]"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <img
            src="/public/samei.jpg"
            alt="owner of the websites"
            className="h-full w-full rounded-xl object-cover -z-1"
          />
          <div
            className={`absolute  left-1/2 -translate-x-1/2 w-[90%]   flex flex-col gap-3 bg-white text-black bg-opacity-50  p-4 rounded-xl  transition-all duration-500 ${
              hoveredItem === 1 ? "bottom-10 opacity-100" : "opacity-0 bottom-5"
            } `}
          >
            <p className="text-muted">Mobile Solutions</p>
            <p className="text-3xl font-semibold capitalize">
              the coding awards
            </p>
            <p className="flex items-center gap-1 text-lg font-semibold">
              View Project{" "}
              <span className="-rotate-45 text-2xl">
                <img
                  width="35"
                  height="30"
                  src="https://img.icons8.com/ios-filled/50/right--v1.png"
                  alt="right--v1"
                />
              </span>{" "}
            </p>
          </div>
        </div>
        <div
          role="lsitItem"
          className="relative h-[70dvh] w-full"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <img
            src="/public/sameiSari.jpg"
            alt="owner of the websites"
            className="h-full w-full rounded-xl object-cover "
          />
          <div
            className={`absolute  left-1/2 -translate-x-1/2 w-[90%]   flex flex-col gap-3 bg-white text-black bg-opacity-50  p-4 rounded-xl  transition-all duration-500 ${
              hoveredItem === 2 ? "bottom-10 opacity-100" : "opacity-0 bottom-5"
            } `}
          >
            <p className="text-muted">Branding</p>
            <p className="text-3xl font-semibold capitalize">
              Corporate Branding
            </p>
            <p className="flex items-center gap-1 text-lg font-semibold">
              View Project{" "}
              <span className="-rotate-45 text-2xl">
                <img
                  width="35"
                  height="30"
                  src="https://img.icons8.com/ios-filled/50/right--v1.png"
                  alt="right--v1"
                />
              </span>{" "}
            </p>
          </div>
        </div>
        <div
          role="lsitItem"
          className="relative h-[110dvh] w-full"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <img
            src="/public/samei4.jpg"
            alt="owner of the websites"
            className="h-full w-full rounded-xl object-cover "
          />
          <div
            className={`absolute  left-1/2 -translate-x-1/2 w-[90%]   flex flex-col gap-3 bg-white text-black bg-opacity-50  p-4 rounded-xl  transition-all duration-500 ${
              hoveredItem === 3 ? "bottom-10 opacity-100" : "opacity-0 bottom-5"
            } `}
          >
            <p className="text-muted">Developing</p>
            <p className="text-3xl font-semibold capitalize">
              Interior Design Ideas
            </p>
            <p className="flex items-center gap-1 text-lg font-semibold">
              View Project{" "}
              <span className="-rotate-45 text-2xl">
                <img
                  width="35"
                  height="30"
                  src="https://img.icons8.com/ios-filled/50/right--v1.png"
                  alt="right--v1"
                />
              </span>{" "}
            </p>
          </div>
        </div>
        <div
          role="lsitItem"
          className="relative h-[85dvh] mt-[-22%] w-full"
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <img
            src="/public/imageCamera.jpg"
            alt="owner of the websites"
            className="h-full w-full rounded-xl object-cover "
          />
          <div
            className={`absolute  left-1/2 -translate-x-1/2 w-[90%]   flex flex-col gap-3 bg-white text-black bg-opacity-50  p-4 rounded-xl  transition-all duration-500 ${
              hoveredItem === 4 ? "bottom-10 opacity-100" : "opacity-0 bottom-5"
            } `}
          >
            <p className="text-muted">Testing</p>
            <p className="text-3xl font-semibold capitalize">
              The Coding Honors
            </p>
            <p className="flex items-center gap-1 text-lg font-semibold">
              View Project{" "}
              <span className="-rotate-45 text-2xl">
                <img
                  width="35"
                  height="30"
                  src="https://img.icons8.com/ios-filled/50/right--v1.png"
                  alt="right--v1"
                />
              </span>{" "}
            </p>
          </div>
        </div>
        <div
          role="lsitItem"
          className="relative h-screen mt-[-64%] w-full"
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <img
            src="/public/imageCar.jpg"
            alt="owner of the websites"
            className="h-full w-full rounded-xl object-cover "
          />
          <div
            className={`absolute  left-1/2 -translate-x-1/2 w-[90%]   flex flex-col gap-3 bg-white text-black bg-opacity-50  p-4 rounded-xl  transition-all duration-500 ${
              hoveredItem === 5 ? "bottom-10 opacity-100" : "opacity-0 bottom-5"
            } `}
          >
            <p className="text-muted">Design</p>
            <p className="text-3xl font-semibold capitalize">
              Social Greek Made
            </p>
            <p className="flex items-center gap-1 text-lg font-semibold">
              View Project{" "}
              <span className="-rotate-45 text-2xl">
                <img
                  width="35"
                  height="30"
                  src="https://img.icons8.com/ios-filled/50/right--v1.png"
                  alt="right--v1"
                />
              </span>{" "}
            </p>
          </div>
        </div>
        <div
          role="lsitItem"
          className="relative h-full w-full mt-2"
          onMouseEnter={() => handleMouseEnter(6)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <img
            src="/public/sameiFour.jpg"
            alt="owner of the websites"
            className="h-full w-full rounded-xl object-cover "
          />
          <div
            className={`absolute  left-1/2 -translate-x-1/2 w-[90%]   flex flex-col gap-3 bg-white text-black bg-opacity-50  p-4 rounded-xl  transition-all duration-500 ${
              hoveredItem === 6 ? "bottom-10 opacity-100" : "opacity-0 bottom-5"
            } `}
          >
            <p className="text-muted">Developing</p>
            <p className="text-3xl font-semibold capitalize">
              No-Bull Bootcamp
            </p>
            <p className="flex items-center gap-1 text-lg font-semibold">
              View Project{" "}
              <span className="-rotate-45 text-2xl">
                <img
                  width="35"
                  height="30"
                  src="https://img.icons8.com/ios-filled/50/right--v1.png"
                  alt="right--v1"
                />
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
