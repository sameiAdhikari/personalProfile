import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { listOfExperience } from "../data/data";

function Experience() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const navigate = useNavigate();
  const handleMouseEnter = (number: number) => {
    setHoveredItem(number);
  };
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  const handleClick = (id: string) => {
    navigate(`/work/${id}`);
  };

  return (
    <section className="relative max-w-screen min-h-screen px-4   lg:px-10 lg:pt-25 lg:pb-10 experience">
      <h1 className="text-2xl mb-5 md:mb-10 md:text-4xl lg:text-5xl font-bold lg:mb-15">
        My Work Experience
      </h1>
      <div
        role="list"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-7 cursor-pointer"
      >
        {listOfExperience.map((el, i) => (
          <div
            key={el.id}
            role="lsitItem"
            className="relative w-full lg:h-[85dvh]"
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handleClick(el.id)}
          >
            <img
              src={el.imagePath}
              alt="owner of the websites"
              className="h-full w-full rounded-xl object-cover -z-1"
            />
            <div
              className={`absolute  left-1/2 -translate-x-1/2 w-[90%]   flex flex-col gap-0 bg-white text-black bg-opacity-50  py-2 px-4 md:p-4 rounded-xl  transition-all duration-500 ${
                hoveredItem === i
                  ? "bottom-10 opacity-100 "
                  : "opacity-100 lg:opacity-0 bottom-2 md:bottom-5"
              } `}
            >
              <p className="text-muted md:mb-2">{el.category}</p>
              <p className="text-xl md:text-3xl font-semibold capitalize">
                {el.title}
              </p>
              <p className="flex items-center gap-1 md:text-lg font-semibold">
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
        ))}
      </div>
    </section>
  );
}

export default Experience;
