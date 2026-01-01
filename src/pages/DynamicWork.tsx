import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { listOfExperience } from "../data/data";

function Work() {
  const navigate = useNavigate();

  const [isZoomin, setIsZoomin] = useState<number | null>(null);
  return (
    <div className="px-5 mt-20 lg:px-10 lg:mt-25">
      <h1 className="w-full text-center bg-white py-2  lg:py-8 rounded-xl  md:text-2xl lg:text-4xl font-semibold mb-4 lg:mb-10">
        Related Work
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 cursor-pointer">
        {listOfExperience?.map((list, i) => (
          <div
            key={list.id}
            className="flex items-start flex-col gap-1 "
            onMouseEnter={() => setIsZoomin(i)}
            onMouseLeave={() => setIsZoomin(null)}
            onClick={() => {
              navigate(`/work/${list?.id}`);
              window.scrollTo(0, 0);
            }}
          >
            <div className=" md:max-h-150 md:w-[60dvh] lg:w-115 lg:h-105 overflow-hidden rounded-2xl">
              <img
                src={list?.imagePath}
                alt={list?.title}
                className="w-full h-full object-cover  transition-all duration-300"
                style={{
                  scale: isZoomin === i ? "105%" : "",
                }}
              />
            </div>
            <p className="text-[15px] mt-4 lg:mt-10 text-muted capitalize">
              {list?.category}
            </p>
            <h2 className="text-base md:text-xl font-semibold capitalize">
              {list?.title}
            </h2>
            <button className=" flex gap-2 font-medium md:text-[18px] items-center justify-center">
              view Project{" "}
              <span
                className={`flex transition-transform ${
                  isZoomin === i ? "-skew-y-30!" : ""
                }  `}
              >
                <FaArrowRightLong className="md:text-3xl" />
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
