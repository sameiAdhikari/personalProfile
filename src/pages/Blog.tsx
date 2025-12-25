import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { listOfBlogs } from "../data/data";

function Blog() {
  const navigate = useNavigate();

  const [isZoomin, setIsZoomin] = useState<number | null>(null);
  return (
    <div className="px-10 mt-10">
      <h1 className="w-full text-center bg-white py-10 rounded-xl text-4xl font-semibold mb-10">
        Blog and News Sections
      </h1>
      <div className="max-w-screen grid grid-cols-3 gap-6 cursor-pointer">
        {listOfBlogs?.map((list, i) => (
          <div
            key={list.id}
            className="flex items-start flex-col gap-1 "
            onMouseEnter={() => setIsZoomin(i)}
            onMouseLeave={() => setIsZoomin(null)}
            onClick={() => {
              navigate(`/work/blog/${list?.id}`);
              window.scrollTo(0, 0);
            }}
          >
            <div className="w-105 h-100 overflow-hidden rounded-2xl">
              <img
                src={list?.image}
                alt={list?.title}
                loading="lazy"
                className="w-full h-full object-cover  transition-all duration-300"
                style={{
                  scale: isZoomin === i ? "105%" : "",
                }}
              />
            </div>
            <p className="text-[20px] mt-10 text-muted capitalize">
              {list?.category}
            </p>
            <h2 className="w-full text-xl font-semibold capitalize">
              {list?.title}
            </h2>
            <button className=" flex gap-2 font-medium text-[18px] items-center justify-center">
              Read more{" "}
              <span
                className={`flex transition-all duration-300 ease-in-out ${
                  isZoomin === i ? "-skew-y-25!" : ""
                }  `}
              >
                <FaArrowRightLong className="text-xl" />
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
